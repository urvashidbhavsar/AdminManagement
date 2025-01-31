import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  const sidemenu = [
    { pathname: "Home", path: "/Home" },
    { pathname: "Add Product", path: "/Home/Addproduct" },
    { pathname: "Show Product", path: "/Home/Showproduct" },
  ]
  return (
    <>
      {
        sidemenu.map(items =>
          <li key={items.pathname} className='py-2 px-4'>
            <Link to={items.path} style={{ color: "black", textDecoration: "none" }}>
              {items.pathname}
            </Link>
          </li>
        )
      }
    </>
  )
}

export default List
