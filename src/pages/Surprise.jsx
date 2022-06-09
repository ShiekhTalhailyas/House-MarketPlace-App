import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import Slider from '../components/Slider';

export default function Surprise() {
  return (
    <div>
     
        <header 
        style={{
            textAlign:'center',  
            fontSize:' 30px', 
            margin:'30px'}}
        >
            Home Search Place
        </header>
        <main>
        <div style={{textAlign:'center'}}>
            <form >
                <input type='text' 
                placeholder='search houses' 
                style={{
                  textAlign:'center', 
                  margin:'5px 20px', 
                  width:'50%', 
                  padding:'20px' }}
                  />
            </form>
        </div>
        <div>
            <h1 style={{
            textAlign:'center', 
            fontSize:' 30px',
            margin:'30px'}}
            > Popular Offers</h1>
        </div>
        <Slider />
        </main>
    </div>
  )
}
