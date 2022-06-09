import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

 function ForgotPassword() {
   const [email, setEmail] =useState('')
   const onChange = (e) => {
     setEmail(e.target.value)
   }

   const onSubmit = async(e) => { 
     e.preventDefault()
     try {
       const auth =getAuth()
       await sendPasswordResetEmail(auth, email)
       toast.success('Email Sent Successfully')
     } catch (error) {
       toast.error('could not send ResetEmail')
     }

   }
  return (
    <>
    <div className='headerContainer'>
        <header className='pageHeader'>
         ForgotPassword
        </header>
    </div>
   
   <main>
   <form onSubmit={onSubmit} >
     <input className='emailInput' 
     id='email' 
     placeholder='Email' 
     value={email} 
     onChange={onChange}/>
   
   <Link className='forgotPasswordLink' to='/sign-in'>Sign-In</Link>
  
   <div className='signInBar'>
     <div className='signInText'>Send Reset Link</div>
     <button className='signInButton'>
       <ArrowRightIcon  fill='#ffffff' width='34px' height='34px'/>
     </button>
   </div>
    </form>
    </main>
    </>
  )
}
export default ForgotPassword
