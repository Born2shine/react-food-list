import React, { useEffect, useState } from 'react'
import useFetchMeal from '../hooks/useFetch'
import SingleMeal from '../components/SingleMeal'

const Meal = () => {
    const {food, loading} = useFetchMeal()
    const [meal, setMeal] = useState(food)
    // useEffect(() =>{
    //            if(food){
    //             console.log(food.meals)
    //            }  
    // },[food])

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <section className="main">
           { food &&
            <div className="food-container">
               
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
           }
        </section>
    )
}

export default Meal
