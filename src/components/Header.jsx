import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header class="flex justify-between items-center bg-white shadow-sm p-4">
      <div class="text-lg font-medium">
        <Link to="/">
          <span className="mr-2">⛩</span> Nazim
        </Link>
      </div>
      <div>
        <Link to="/create" class="px-2 py-1 rounded-lg shadow-sm border-2">
          create
        </Link>
      </div>
    </header>
  )
}

export default Header
