import React from "react";
import "./ProtestComponent.css";

function ProtestComponent() {
  return (
    <div className='protest-container'>
      <div className='protest-header-container'>
        <img
          className='protest-header-img'
          src='/Images/back.jpg'
          alt='header mage'
        />
        <div className='protest-header-text-container'>
          <h1 className='protest-header-text'> Protest Resources </h1>
        </div>
      </div>
      <div className='protest-desc-text-container'>
        <span className='protest-desc-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          odit laboriosam voluptatibus error eos optio tempora ullam placeat
          voluptates labore! Vitae, harum? Esse provident mollitia assumenda
          facilis excepturi animi nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur odit laboriosam voluptatibus error eos
          optio tempora ullam placeat voluptates labore! Vitae, harum? Esse
          provident mollitia assumenda facilis excepturi animi nisi.
        </span>
        <br />
        <br />
        <span className='protest-desc-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          odit laboriosam voluptatibus error eos optio tempora ullam placeat
          voluptates labore! Vitae, harum? Esse provident mollitia assumenda
          facilis excepturi animi nisi. eos optio tempora ullam placeat
          voluptates labore! Vitae, harum? Esse provident mollitia assumenda
          facilis excepturi animi nisi.
        </span>
      </div>
      <div className='protest-lists-container'>
        <div className='protest-list-left'>
          <h1 className='protest-list-header'>
            {" "}
            List of Protest Related Bail Funds
          </h1>
          <ul className='protest-list-items-left'>
            <li className='protest-list-item'>
              <a href=''>Link1</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link2</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link3</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link4</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link5</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link6</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link7</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link8</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link9</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link10</a>
            </li>
          </ul>
        </div>
        <div className='protest-list-right'>
          <h1 className='protest-list-header list-header-right'>
            {" "}
            Free Virtual Mental Health Resource{" "}
          </h1>
          <ul className='protest-list-items-right'>
            <li className='protest-list-item'>
              <a href=''>Link1</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link2</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link3</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link4</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link5</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link6</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link7</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link8</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link9</a>
            </li>
            <li className='protest-list-item'>
              <a href=''>Link10</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='protest-bottom-text-container'>
        <span className='protest-bottom-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          molestiae tempore velit laudantium quasi excepturi! Molestias natus
          dolorum error rerum placeat dolores architecto facilis? Corporis
          architecto fugiat praesentium nam omnis.
        </span>
      </div>
    </div>
  );
}

export default ProtestComponent;
