import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../Actions/FoodActions'

import Food from '../Components/Food'



const HomeDisplay = () => {
    const dispatch = useDispatch()


    // useSelector- takes current state as an arg and returns thatever data you want from it
    const foodsState = useSelector(state => state.getAllFoodsReducer)

    // tracks the request between these three
    const { foods, error, loading } = foodsState

    useEffect(() => {
        dispatch(getAllFoods())

    }, [])


    return (
        <div className='main-homeDisplay'>
            <div className="row justify-content-center">
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) : (
                    foods.map((food, i) => {
                        return (
                            <div key={i} className='col-md-4'>
                                <div>
                                    <Food food={food} />
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default HomeDisplay