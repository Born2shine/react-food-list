import React, { useEffect, useState } from 'react'
const foodAPI = `https://cors-anywhere-venky.herokuapp.com/https://asm-dev-api.herokuapp.com/api/v1/food`

const useFetchMeal = () => {
    const [food, setFood] = useState();
    const [loading, setLoading] = useState(false);
   useEffect(() => {
    try {
        setLoading(true)
        fetch(foodAPI)
        .then((res) => res.json())
        .then((data) => {
            setFood(data.data)
            setLoading(false)
        })
    } catch (error) {
        return error.message
    }
   },[])
    return { food, loading }
}

export default useFetchMeal
