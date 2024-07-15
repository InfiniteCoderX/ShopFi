import menu from "../../utils/menu"
import { Link } from "react-router-dom"

const Aside = ({handleMobileOpen}) => {
  return (
    <div className="flex flex-col">
      <button className="m-3 text-right md:hidden block" onClick={handleMobileOpen}>
      <i className="ri-close-circle-fill text-2xl text-white active:text-blue-400"></i>
      </button>
    {menu.map((items, index) => (
      <div key={index}>
        <Link to={items.link}>
          <div className="bg-[#306190] text-white py-3 text-lg rounded-md mb-3">
            <i className={`${items.icon} m-2 text-xl`}></i>
            {items.name}
          </div>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default Aside
