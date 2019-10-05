import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  const liStyle = 'p-4 bg-gray-200 hover:bg-gray-400 uppercase font-black cursor-pointer'

  const setNewActiveCategory = category => {
    props.setNewActiveCategory(category)
  }

  return (
    <ul className="flex justify-center border-b-4">
      <li
        className={
          liStyle +
          (props.activeCategory === '' || props.activeCategory === undefined
            ? ' bg-gray-600'
            : ' bg-gray-200')
        }
        onClick={() => setNewActiveCategory('')}
      >
        All
      </li>
      {props.categories ? (
        props.categories.map((value, index) => (
          <li
            className={liStyle + (props.activeCategory === value ? ' bg-gray-600' : ' bg-gray-200')}
            key={index}
            onClick={() => setNewActiveCategory(value)}
          >
            {value}
          </li>
        ))
      ) : (
        <li>No categories</li>
      )}
      <li>
        <Link to="add-category" className={liStyle + ' block'}>
          ➕
        </Link>
      </li>
    </ul>
  )
}
