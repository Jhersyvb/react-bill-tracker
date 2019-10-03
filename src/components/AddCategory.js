import React, { useState } from 'react'

export default props => {
  const [category, setCategory] = useState('')

  const handleCategory = e => {
    setCategory(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!category) {
      alert('Please enter a category')
      return
    }

    props.onSubmit(category)
  }

  return (
    <form className="h-100 w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">Enter a category of bills</h1>
          <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Add category"
              value={category}
              onChange={handleCategory}
            />
            <button
              className="flex-no-shrink p-2 ml-4 rounded bg-teal-500 text-white hover:bg-teal-600"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
