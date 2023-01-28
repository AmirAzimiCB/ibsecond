import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import Drawer from './Drawer'

const BlogNav = ({ setFilter }) => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <section>
      <Drawer setFilter={setFilter} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <div className="blognav-container">
        <img src='/Icons/FinalLogo.jpg' alt="Incendiary Balloons" />
        <div onClick={() => setShowDrawer(!showDrawer)}>
          {
            showDrawer ? <HiOutlineX className="blognav-icon" /> : <HiOutlineMenu className="blognav-icon" />
          }
        </div>
      </div>
    </section>
  )
}

export default BlogNav
