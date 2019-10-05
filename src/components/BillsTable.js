import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'

export default props => {
  const removeBill = index => {
    props.removeBill(index)
  }

  return (
    <table className="table">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-200 text-center">
          <td colSpan="4">
            <Link to="/add-bill" className="underline">
              Add new
            </Link>
          </td>
        </tr>
        {props.bills.map((value, index) => {
          return (
            <tr key={index}>
              <td>{Moment(value.date).format('MMM D YYYY')}</td>
              <td>${value.amount}</td>
              <td>{value.category}</td>
              <td>
                <button onClick={() => removeBill(index)}>𝗫</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
