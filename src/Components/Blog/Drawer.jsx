import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import useCategories from '../../hooks/useCatrgories'

const Drawer = ({ showDrawer, setFilter, setShowDrawer }) => {
  const { categories } = useCategories()
  const changeCategory = (category) => {
    setShowDrawer(false)
    if (category === "All") {
      setFilter("")
    } else {
      setFilter(category)
    }
  }
  return (
    <div className={`drawer ${showDrawer ? 'show' : 'hide'}`}>
      <section className="center-content h-full w-full">
        <ul className="drawer-nav-links flex-1">
          <li>
            <h4>01</h4>
            <div className="flex justify-between items-center">
              <h2 className="font-cloister-black">Home</h2>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>02</h4>
            <div className="flex justify-between items-center">
              <h2 className="font-cloister-black">Manifesto</h2>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>03</h4>
            <div className="flex justify-between items-center">
              <h2 className="font-cloister-black">Founder & CEO</h2>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>04</h4>
            <div className="flex justify-between items-center">
              <h2 className="font-cloister-black">Protest Resources</h2>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>05</h4>
            <div className="flex justify-between items-center">
              <h2 className="font-cloister-black">Contact</h2>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
        </ul>

        <ul className='flex-2'>
          <div className="flex justify-between items-center border-b-1 mb-2">
            <h2 className="font-cloister-black">News</h2>
            <FiArrowUpRight className="icon" />
          </div>
          <div className="flex">
            <article className="category-grid bg-white">
              {categories.map(category => (
                <p onClick={() => changeCategory(category.title)} key={category._id}>
                  {category.title}
                </p>
              ))}
              <p onClick={() => changeCategory("All")}>All</p>
            </article>
          </div>
        </ul>
      </section>
    </div>
  )
}

export default Drawer