import React, { useState, useEffect } from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'
import './App.css'

import AddCategory from './components/AddCategory'
import AddBill from './components/AddBill'
import NavBar from './components/NavBar'
import Chart from './components/Chart'
import BillsTable from './components/BillsTable'

function App() {
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  const addCategory = category => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
    history.push('/')
  }

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories'))
    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))

    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)

    if (!categoriesInLocalStorage) {
      history.push('/add-category')
    }
  }, [])

  const addBill = (amount, category, date) => {
    const bill = { amount, category, date }
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
    history.push('/')
  }

  const removeBill = index => {
    let updatedBills = [...bills]
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length))
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const activeBills = () => {
    if (!bills) return []
    return bills
      .filter(bill => (activeCategory ? bill.category === activeCategory : true))
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const setNewActiveCategory = category => {
    setActiveCategory(category)
  }

  return (
    <Router history={history}>
      <div className="App">
        <Route path="/add-category" render={() => <AddCategory onSubmit={addCategory} />} />
        <Route
          path="/add-bill"
          render={() => <AddBill onSubmit={addBill} categories={categories} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <NavBar
                categories={categories}
                activeCategory={activeCategory}
                setNewActiveCategory={setNewActiveCategory}
              />
              <div className="container mx-auto flex">
                <div className="w-1/2">
                  <BillsTable bills={activeBills()} removeBill={removeBill} />
                </div>
                <div className="w-1/2">
                  <Chart bills={activeBills()} />
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </Router>
  )
}

export default App
