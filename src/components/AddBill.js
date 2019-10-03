import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default props => {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState(props.categories[0])
  const [date, setDate] = useState(new Date())

  const handleChangeAmount = e => {
    setAmount(parseInt(e.target.value), 10)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!amount) {
      alert('Please enter a amount')
      return
    }

    props.onSubmit(amount, category || props.categories[0], date)
  }

  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const handleChangeDate = date => {
    setDate(date)
  }

  const inputStyle = 'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

  return (
    <form className="h-100 w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">Enter a new bill</h1>
          <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
          <div className="flex mt-4">
            <DatePicker selected={date} onChange={handleChangeDate} className={inputStyle} />
            <select onChange={handleChangeCategory}>
              {props.categories
                ? props.categories.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    )
                  })
                : ''}
            </select>
            <input
              className={inputStyle}
              type="text"
              placeholder="Write a amount"
              value={amount}
              onChange={handleChangeAmount}
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
