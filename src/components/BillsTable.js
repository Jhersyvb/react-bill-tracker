import React from 'react'
import Moment from 'moment'

export default props => {
  const triggerShowAddBill = () => {
    props.showAddBill()
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
            <button className="underline" onClick={triggerShowAddBill}>Add new</button>
          </td>
        </tr>
        {props.bills.map((value, index) => {
          return (
            <tr key={index}>
              <td>{Moment(value.date).format('MMM D YYYY')}</td>
              <td>${value.amount}</td>
              <td>{value.category}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}