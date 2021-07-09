import React from 'react'
import { AiOutlinePlus, AiFillStar } from 'react-icons/ai'

const index = ({mealBag}) => {
    const {ratings, strMeal, strMealThumb, description, title, price} = mealBag
    const showNow = description.slice(0, 100)
    const ratingArr = Array.from({length: ratings})
    return (
        <article>
           <img src={strMealThumb} alt="meal-img" />
           <div className="info-wrapper">
                <div className="hero">
                    <h2>{title}</h2>
                    <h2>{price}</h2>
                </div>
                <p className="hero-text">served with french fries + drink</p>
                <div className="description">
                    {
                        showNow + ' more...'
                    }
                </div>
           </div>
              <footer>
                <div className="rating">
                    {
                        ratingArr.map((r,i) => <span key={i} className="rating-icon"><AiFillStar/></span>)
                    }
                    {
                        ratingArr.map((r,i) => {
                            return ( 5 - ratings > i &&
                                <span key={i} className="no-rating"><AiFillStar/></span>
                            )
                        })
                    }
                </div>
                <a href="$" className="add-to-cart"><AiOutlinePlus/></a>
              </footer>
        </article>
    )
}

export default index
