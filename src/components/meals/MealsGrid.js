import React from 'react'
import MealsItem from './MealsItem'
import 'bootstrap/dist/css/bootstrap.min.css'

const MealsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>IsLoading</h1>
  ) : (    
    <section className='cards'>
      {items.categories.map((item) => (
      <MealsItem key={item.strCategory} item={item}></MealsItem>
      ))}
    </section>
  )
}

export default MealsGrid