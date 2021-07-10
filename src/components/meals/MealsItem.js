import React from 'react'

const MealsItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.strCategoryThumb} alt='Meal Category Thumbnail' />
        </div>
        <div className='card-back'>
          <h1>{item.strCategory}</h1>
          <ul>
            <li>
              {item.strCategoryDescription}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MealsItem