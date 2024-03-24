import { useState } from 'react'
import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {

  // const watches = [
  //   {id:1,name:'Apple Watch',price:200},
  //   {id:2,name:'Samsu Watch',price:300},
  //   {id:3,name:'Casio Watch',price:400},
  // ]

//   const watches = [
//     {
//         "id": 1,
//         "name": "Apple Watch Series 6",
//         "brand": "Apple",
//         "model": "Apple Watch Series 6",
//         "price": 399
//     },
//     {
//         "id": 2,
//         "name": "Galaxy Watch 4",
//         "brand": "Samsung",
//         "model": "Galaxy Watch 4",
//         "price": 349
//     },
//     {
//         "id": 3,
//         "name": "Fitbit Versa 3",
//         "brand": "Fitbit",
//         "model": "Fitbit Versa 3",
//         "price": 229
//     },
//     {
//         "id": 4,
//         "name": "Garmin Forerunner 945",
//         "brand": "Garmin",
//         "model": "Garmin Forerunner 945",
//         "price": 599
//     },
//     {
//         "id": 5,
//         "name": "Huawei Watch GT 2 Pro",
//         "brand": "Huawei",
//         "model": "Huawei Watch GT 2 Pro",
//         "price": 299
//     }
// ]

const [watches,setWatches] = useState([]);
// useEffect(()=>{
//   fetch('watches.json')
//     .then((res)=>res.json())
//     // .then((data)=>console.log(data))
//     .then((data)=>setWatches(data))
// },[])
useEffect(()=>{
  const url = `https://raw.githubusercontent.com/SohelShahid117/watches-data/main/watches.json`
  fetch(url)
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>setWatches(data))
},[])

  return (
    <>
      <h1>ph-9-M-7-Module-41-es6-Overview</h1>

      <h2>41-1 Module Introduction ES6 Modules Simple Import, Export</h2>
      <h3>41-2 ES6 Modules, Import Default, Relative Path</h3>

      <h2>41-3 Create And Load Fake Data, Chaptgpt Json, Online Api</h2>

      {/* <Sunglass></Sunglass> */}

      {/* <Watch></Watch> */}
      {/* {
        watches.map((watch)=><Watch></Watch>)
      } */}
      {
        watches.map((watch)=><Watch watch={watch}></Watch>)
      }
    </>
  )
}

export default App
