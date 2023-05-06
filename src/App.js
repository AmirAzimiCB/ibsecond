import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import BlogPost from "./Components/Blog/BlogPost";
import BlogShow from "./Components/Blog/BlogShow";
import VirtualGallery from "./Components/VirtualGallery/VirtualGallery";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogFilter from "./Pages/BlogFilter";
import Contact from "./Pages/Contact";
import Cover from "./Pages/Cover";
import Founder from "./Pages/Founder";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import ProtestResources from "./Pages/ProtestResources";
import "./App.scss";
import CategoryPost from "./Pages/CategoryPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/Environmentalism" element={<Environmentalism />} /> */}
          <Route path="/manifesto" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:categorySlug" element={<CategoryPost />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/gallery" element={<VirtualGallery />} />
          <Route path="/protestresources" element={<ProtestResources />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/blog/:categorySlug" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
