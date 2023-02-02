import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import useCategories from '../../hooks/useCatrgories'
import useStore from '../../store/ZustandStore'

const Drawer = () => {
  const { categories } = useCategories()
  const showDrawer = useStore((state) => state.showDrawer)
  const hideDrawer = useStore((state) => state.hideDrawer)
  const setBlogCategory = useStore((state) => state.setBlogCategory)

  const changeCategory = (category) => {
    hideDrawer()
    if (category === "All") {
      setBlogCategory("")
    } else {
      setBlogCategory(category)
    }
  }

  return (
    <div className={`drawer ${showDrawer ? 'show' : 'hide'}`}>
      <section className="center-content h-full w-full nav-wrapper">
        <ul className="drawer-nav-links flex-1">
          <li>
            <h4>01</h4>
            <div className="flex justify-between items-center">
              <Link onClick={() => hideDrawer()} to="/home">
                <h2 className="font-cloister-black">Home</h2>
              </Link>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>02</h4>
            <div className="flex justify-between items-center">
              <Link onClick={() => hideDrawer()} to="/manifesto">
                <h2 className="font-cloister-black">Manifesto</h2>
              </Link>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>03</h4>
            <div className="flex justify-between items-center">
              <Link onClick={() => hideDrawer()} to="/founder">
                <h2 className="font-cloister-black">Founder & CEO</h2>
              </Link>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>04</h4>
            <div className="flex justify-between items-center">
              <Link onClick={() => hideDrawer()} to="/protestresources">
                <h2 className="font-cloister-black">Protest Resources</h2>
              </Link>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
          <li>
            <h4>05</h4>
            <div className="flex justify-between items-center">
              <Link onClick={() => hideDrawer()} to="/contact">
                <h2 className="font-cloister-black">Contact</h2>
              </Link>
              <FiArrowUpRight className="icon" />
            </div>
          </li>
        </ul>

        <ul className='flex-2'>
          <div className="flex justify-between items-center border-b-1 mb-2">
            <Link onClick={() => hideDrawer()} to="/blog">
              <h2 className="font-cloister-black">News</h2>
            </Link>
            <FiArrowUpRight className="icon" />
          </div>
          <div className="flex">
            <article className="category-grid bg-white">
              {categories.map(category => (
                <Link to="/blog" onClick={() => changeCategory(category.title)} key={category._id}>
                  {category.title}
                </Link>
              ))}
              <Link to="/blog" onClick={() => changeCategory("All")}>All</Link>
            </article>
          </div>
        </ul>
      </section>
    </div>
  )
}

export default Drawer