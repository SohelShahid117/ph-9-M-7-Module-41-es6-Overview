import { useState } from 'react'
import { useEffect } from 'react';
import Botle from '../Botle/Botle';

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    useEffect(()=>{
      fetch('bottles.json')
      .then((res)=>res.json())
      // .then((data)=>console.log(data))
      .then((data)=>setBottles(data))
    },[])
    return (
        <div>
            <h2>Bootles here:{bottles.length}</h2>
            <Botle></Botle>
            {
                bottles.map((botle)=><Botle key={botle.id} botle={botle} ></Botle>)
            }
            
        </div>
    );
};

export default Bottles;