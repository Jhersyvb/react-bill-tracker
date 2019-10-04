import React from 'react'

export default props => {
  const triggerShowAddCategory = () => {
    props.showAddCategory()
  }

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
      {props.categories
        ? props.categories.map((value, index) => {
            return (
              <li
                className={
                  liStyle + (props.activeCategory === value ? ' bg-gray-600' : ' bg-gray-200')
                }
                key={index}
                onClick={() => setNewActiveCategory(value)}
              >
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
