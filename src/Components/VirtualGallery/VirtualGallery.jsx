import React, { Suspense, useEffect, useRef } from 'react';
import { Vector3, Color3, Color4, CubeTexture, PBRMaterial, MeshBuilder, GlowLayer, ScreenSpaceReflectionPostProcess } from '@babylonjs/core';
import { Engine, Scene, Model } from 'react-babylonjs';
import './VirtualGallery.css'
import '@babylonjs/loaders';
import '@babylonjs/core/Debug/debugLayer';
import '@babylonjs/inspector';
import { SkyMaterial } from '@babylonjs/materials';


function VirtualGallery({ setOpenGallery, setIsGalleryLoading }) {

  const sceneRef = useRef();
  const cameraRef = useRef();

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') setOpenGallery(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', (e) => handleEscapeKey(e))

    return () => {
      document.removeEventListener('keyup', handleEscapeKey)
    }
    // eslint-disable-next-line
  }, [])



  const addSkybox = () => {
    const skybox = MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, sceneRef.current);
    let skyboxMaterial = new SkyMaterial("skyBox", sceneRef.current);
    skyboxMaterial.luminance = 0.5;
    skyboxMaterial.inclination = 0.2;
    skyboxMaterial.azimuth = 0.2;
    skyboxMaterial.turbidity = 0.4;
    skyboxMaterial.rayleigh = 0.4;
    skyboxMaterial.backFaceCulling = false;
    skybox.material = skyboxMaterial;
  };

  const addGlowLayer = (intensity, blurKernelSize, scene) => {
    const gl = new GlowLayer('glow', scene, {
      blurKernelSize: blurKernelSize,
      mainTextureSamples: 4,
    });

    gl.intensity = intensity;
  };


  const setupScene = (scene) => {
    sceneRef.current = scene;
    const environmentTexture = new CubeTexture("./Images/environmentSpecular.env", scene, 512);
    scene.environmentTexture = environmentTexture;
    scene.environmentTexture.level = 0.5;

    addSkybox();
    addGlowLayer(0.7, 64, sceneRef.current);


    scene.onReadyObservable.add(() => {
      console.log('scene ready');
      setIsGalleryLoading(false);
    })
  };

  const setupCamera = (camera) => {

    cameraRef.current = camera;

    // uncomment for WASD controls

    // camera.keysUp.push(87); // "w"
    // camera.keysDown.push(83); // "s"
    // camera.keysLeft.push(65); // "a"
    // camera.keysRight.push(68); // "d

  };

  const adjustGlassMaterial = (root) => {

    const glassMaterial = new PBRMaterial('glassMaterial', sceneRef.current);
    glassMaterial.metallic = 0.4;
    glassMaterial.roughness = 0.1;
    glassMaterial.transparencyMode = 2;
    glassMaterial.alpha = 0.2;
    glassMaterial.albedoColor = new Color3(0.45, 0.45, 0.45);


    const curvedGlassNodes = [];
    const straightGlassNodes = [];
    for (const node of root.getChildTransformNodes()) {
      if (node.name.includes('Glass') && node.name.includes('DefaultSceneRoot') && node.name.includes('Curved')) {
        curvedGlassNodes.push(node);
      }
      else if (node.name.includes('Glass') && node.name.includes('DefaultSceneRoot') && node.name.includes('Straight')) {
        straightGlassNodes.push(node);
      }
    }


    for (const node of curvedGlassNodes) {
      const children = node.getChildren();
      for (const childNode of children) {
        const childNodeName = childNode.name.substring(17);
        if (childNodeName.includes('Glass')) {
          childNode.getChildMeshes().forEach(child => {
            if (child.name.includes('primitive0')) {
              child.material = glassMaterial;
              child.needDepthPrePass = true;
            }
            else {
              child.material.emissiveColor = new Color3(1, 1, 1);
              child.material.albedoColor = new Color3(0, 0, 0);
            }
          })
        }
      }
    }

    for (const node of straightGlassNodes) {
      const children = node.getChildren();
      for (const childNode of children) {
        const childNodeName = childNode.name.substring(19);
        if (childNodeName.includes('Glass')) {
          if (childNodeName.includes('Splitted')) {
            childNode.dispose();
          }
          else {
            childNode.getChildMeshes().forEach(child => {
              if (child.name.includes('primitive1')) {
                child.material = glassMaterial;
                child.needDepthPrePass = true;
              }
              else {
                child.material.emissiveColor = new Color3(1, 1, 1);
                child.material.albedoColor = new Color3(0, 0, 0);
              }
            })
          }
        }
      }
    }
  };

  const addSSRPostProcess = (camera, scene) => {
    const ssr = new ScreenSpaceReflectionPostProcess("ssr", scene, 1.0, camera);
    ssr.reflectionSamples = 16;
    ssr.strength = 0.8;
    ssr.reflectionSpecularFalloffExponent = 1;
  }

  const removeUnusedLights = (root) => {
    const transformNodes = root.getChildTransformNodes();
    for (const node of transformNodes) {
      if (node.name.includes('RectLight')) {
        node.dispose();
      }
    }
  };

  const addCollisionToWalls = (root) => {
    for (const mesh of root.getChildMeshes()) {
      if (mesh.name.includes('SM_Wall')) {
        mesh.checkCollisions = true;
      }
    }
    for (const node of root.getChildTransformNodes()) {
      if (node.name === 'DatasmithSceneActor_1_organic_wall') {
        node.getChildMeshes().forEach(mesh => mesh.checkCollisions = true)
      }
    }
  };

  const setupGallery = (gallery) => {
    const root = gallery.getChildren()[0];


    removeUnusedLights(root);

    const dirLight = sceneRef.current.getLightByName('DirectionalLight_0');
    dirLight.intensity = 0.4;

    //adjust materials
    adjustGlassMaterial(root);

    const panelMaterial = sceneRef.current.getMaterialByName('MI_Glass_Frame_Inst_Inst');
    panelMaterial.roughness = 0;
    panelMaterial.metallic = 0;
    panelMaterial.albedoColor = new Color3(0.8, 0.8, 0.8).toLinearSpace();
    panelMaterial.emissiveColor = new Color3(0.4, 0.4, 0.4).toLinearSpace();

    const bowlsMaterial = new PBRMaterial('bowlsMaterial', sceneRef.current);
    bowlsMaterial.albedoColor = new Color3(0.8, 0.8, 0.8);
    bowlsMaterial.metallic = 0;
    bowlsMaterial.roughness = 0;
    for (const mesh of root.getChildMeshes()) {
      if (mesh.material?.name === 'MI_Glass_Frame_Inst_Inst' && mesh.name.includes('StaticMeshActor') && mesh.parent.name !== "DatasmithSceneActor_0_vanessa_wall") {
        mesh.material = bowlsMaterial;
      }
    }

    const floorMaterial = sceneRef.current.getMaterialByName('MI_Glossy_White');
    floorMaterial.roughness = 0.3;
    floorMaterial.metallic = 0.3;

    //leaves material 
    for (const material of sceneRef.current.materials) {
      if (material.name.includes("Leaf")) {
        material.transparencyMode = 3;
        material.albedoColor = new Color3(0.42, 0.7, 0).toLinearSpace();
        material.roughness = 1;
        material.metallic = 0;
        material.directIntensity = 0;

        material.getBindedMeshes().forEach(mesh => {
          mesh.needDepthPrePass = true;
        })
      }
    }

    addCollisionToWalls(root);

    addSSRPostProcess(cameraRef.current, sceneRef.current);
  }

  const setupCollisions = (mesh) => {
    mesh.getChildMeshes().forEach((child) => {
      child.isVisible = false;
      child.checkCollisions = true;
    })
  };

  const setupCeiling = (ceiling) => {
    const ceilingMaterial = new PBRMaterial('ceilingMaterial', sceneRef.current);
    ceilingMaterial.albedoColor = new Color3(0.65, 0.65, 0.65)
    ceilingMaterial.roughness = 0.9;
    ceilingMaterial.metallic = 0.1;
    ceiling.getChildMeshes().forEach(child => child.material = ceilingMaterial)

  };

  return (
    <Engine antialias adaptToDeviceRatio canvasId="galleryCanvas">
      <Scene
        clearColor={new Color4(0, 0, 0, 0)}
        onSceneMount={(sceneObject) => {
          setupScene(sceneObject.scene);
        }}
      >
        <universalCamera
          name='universalCamera'
          position={new Vector3(-21, 2, 30)}
          rotation={new Vector3(0, 2.268, 0)}
          applyGravity
          checkCollisions
          ellipsoid={new Vector3(1.2, 0.94, 1.2)}
          minZ={0}
          speed={0.4}
          inertia={0.85}
          fov={0.7}
          onCreated={(camera) => {
            setupCamera(camera)
          }}
        />

        <hemisphericLight
          name="hemisphericLight"
          direction={new Vector3(0, 1, 0)}
          specular={new Color3(0, 0, 0)}
          groundColor={new Color3(1, 1, 1)}
          intensity={0.1}
        />
        <Suspense fallback={<plane name="plane" size={0.2}></plane>}>
          <Model
            name="virtualmuseum"
            sceneFilename="virtualmuseum.glb"
            rootUrl="./Models/"
            onCreated={(gallery) => setupGallery(gallery)}
          ></Model>
          <Model
            name="collisions"
            sceneFilename="collisions.glb"
            rootUrl="./Models/"
            onCreated={(mesh) => setupCollisions(mesh)}
          ></Model>
          <Model
            name="ceiling"
            sceneFilename="ceiling.glb"
            rootUrl="./Models/"
            onCreated={(ceiling) => setupCeiling(ceiling)}
          ></Model>
        </Suspense>
      </Scene>
    </Engine>
  )
}

export default VirtualGallery