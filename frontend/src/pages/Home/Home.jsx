import React, { useState } from 'react'
import '../Home/Home.css'
import { Header } from '../../components/NavBar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
     <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/>
     <hr />
     <FoodDisplay category={category}/>
    </div>
  )
}

export default Home