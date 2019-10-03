import React from 'react'

export default props => {
  const triggerShowAddCategory = () => {
    props.showAddCategory()
  }

  const liStyle = 'p-4 bg-gray-200 hover:bg-gray-400 uppercase font-black cursor-pointer'

  return (
    <ul className="flex justify-center border-b-4">
      {props.categories
        ? props.categories.map((value, index) => {
            return (
              <li className={liStyle} key={index}>
                {value}
              </li>
            )
          })
        : '<li>No categories</li>'}
      <li className={liStyle} onClick={triggerShowAddCategory}>
        ➕
      </li>
    </ul>
  )
}
