import React from 'react'
import {Star} from "../star/star"
import styles from "./stars.module.css"
// import countStarType from "../types/stars";


export const Stars = (proops) => {

  const {count} = proops

  if(typeof count !== "number" || count < 1 || count > 5)  return null
  let arrFromCount = Array.from({length: count})  

  return (
    <ul className = {styles['stars-container']}>
      {arrFromCount.map(() => <Star />)}
    </ul>
  )
}