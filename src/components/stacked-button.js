import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styles = {
  size: {
    width: 128,
    height: 128,
  },
}

const StackedButton = ({ label, faIcon, href }) => {
  return (
    <Link
      to={href}
      style={styles.size}
      className="flex justify-around items-center mr-3 text-center text-gray-700 bg-white rounded-lg p-4 border-2 hover:shadow focus:border focus:outline-none focus:border-blue-400 focus:text-blue-500"
    >
      <div>
        <FontAwesomeIcon icon={faIcon} />
        <div className="mt-1">{label}</div>
      </div>
    </Link>
  )
}

export default StackedButton
