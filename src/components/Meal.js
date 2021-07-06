import React from 'react'
import useFetchMeal from '../hooks/useFetch'
import SingleMeal from '../components/SingleMeal'
import { ImSpinner8 } from 'react-icons/im'

const Meal = () => {
    const {food, loading} = useFetchMeal()
    if(loading){
        return (
            <div className="loader-wrapper">
               <div className="loader">
                <ImSpinner8/>
               </div>
            </div>
        )
    }
    return (
        <section className="main">
           { food &&
            <div className="food-container">
                <div className="foods">
                {
                        food.meals.map((f) => {
                            return (
                                <div key={f.id} className="single-meal">
                                    <SingleMeal mealBag={f}/>
                                </div>
                            )
                        })
                }
                </div>
               <div className="loadmore-btn">
                    <a href="" className="load-more">Load More</a>
               </div>
            </div>
           }
        </section>
    )
}

export default Meal
