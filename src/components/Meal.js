import React, { useEffect, useState } from 'react'
import useFetchMeal from '../hooks/useFetch'
import SingleMeal from '../components/SingleMeal'

const Meal = () => {
    const {food, loading} = useFetchMeal()
    if(loading){
        return <h1>Loading...</h1>
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
