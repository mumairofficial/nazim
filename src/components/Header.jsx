import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow-sm p-4">
      <div className="text-lg font-medium">
        <Link to="/">
          <span className="mr-2">⛩</span> Nazim
        </Link>
      </div>
      <div>
        <Link to="/create" className="px-2 py-1 rounded-lg shadow-sm border-2">
          create
        </Link>
      </div>
    </header>
  )
}

export default Header
