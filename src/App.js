import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Author from './components/ui/Author'
import Footer from './components/ui/Footer'
import MealsGrid from './components/meals/MealsGrid'
import './App.css'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
    <Header />
    <Author />
    <div class='grid'>
      <MealsGrid isLoading={isLoading} items={items} />
    </div>
    <Footer />
    </div>
  )
}

export default App