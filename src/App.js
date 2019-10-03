import React from 'react'
import './App.css'

import AddCategory from './components/AddCategory'
import AddBill from './components/AddBill'
import NavBar from './components/NavBar'
import Chart from './components/Chart'
import BillsTable from './components/BillsTable'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container flex">
        <div className="w-1/2">
          <BillsTable />
        </div>
        <div className="w-1/2">
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default App
