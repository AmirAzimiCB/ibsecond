import React from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import Drawer from './Drawer'
import { Link } from 'react-router-dom'
import useStore from '../../store/ZustandStore'

const BlogNav = ({ isLight }) => {
  const showDrawer = useStore((state) => state.showDrawer)
  const toggleDrawer = useStore((state) => state.toggleDrawer)
  return (
    <section className="blogNav">
      <Drawer />
      <div className="blognav-container">
        <Link to="/home">
          <img src='/Icons/FinalLogo.jpg' alt="Incendiary Balloons" />
        </Link>
        <div onClick={() => toggleDrawer()}>
          {
            showDrawer ?
              <HiOutlineX className="blognav-icon" /> :
              <HiOutlineMenu
                className={`blognav-icon ${isLight ? 'text-white' : ''}`}
              />
          }
        </div>
      </div>
    </section>
  )
}

export default BlogNav
