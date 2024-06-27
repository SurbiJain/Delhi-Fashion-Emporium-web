import React from 'react'

const Button = ({title}) => {
  return (
    <span className="mt-5">
            <button
              href="#"
              className="py-5 px-8 text-white bg-orange-400 rounded-full"
            >
              {title}
            </button>
          </span>
  )
}

export default Button