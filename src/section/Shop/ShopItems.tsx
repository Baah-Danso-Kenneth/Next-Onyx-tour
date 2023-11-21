import React, { useState } from 'react'

function ShopItems() {
  const [selectedCategory, setSelectedCategory]=useState('All')

  const handleCategoryClick=(category:string)=>{
        setSelectedCategory(category)
  }

  const selectProducts = selectedCategory ==='All'
  return (
    <div className='shop-container'>
      <div className="shop-container-elements">
          <div className="nav-shop-items">
            <nav>
             <button>All</button>
             <button>Accessories</button>
             <button>Apparel</button>
             <button>Mentoring</button>
             <button>Totes</button>
             <button>Hats</button>
             <button>Travel Guide</button>
            </nav>
          </div>

          <div className="display-items">

          </div>
      </div>
    </div>
  )
}

export default ShopItems
