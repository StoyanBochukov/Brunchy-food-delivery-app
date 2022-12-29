import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'

const Intro = () => {
  return (
    <section className="intro">
        <h1 className="intro-text">
            The fastest brunch delivery in <span>Your city</span>
        </h1>
        <p className="lead">This is my Exploration for Fruit 
        - Food Delivery Landing Page <FaPizzaSlice/> How about you?</p>
    </section>
  )
}

export default Intro