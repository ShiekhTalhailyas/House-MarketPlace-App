
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Oauth from '../components/Oauth'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg' 
import { async } from '@firebase/util'

function SignIn() {
  const [showPassword, setShowPassword]= useState(false) 
  const [formData, setFormData]= useState({
    email:'',
    password:''
  })

const {email, password} = formData
const navigate = useNavigate()
const onChange = (e) => {setFormData((prevState)=> ({
  ...prevState,
  [e.target.id]:e.target.value,
}))
}
const onSubmit = async (e) => {
  e.preventDefault()
  
try {

 const auth = getAuth()
 const userCredential = await signInWithEmailAndPassword (
   auth, email, password ) 
  console.log(userCredential.user)
 if (userCredential.user){
  navigate('/profile')
 }
} catch (error) {
 toast.error('inValid User')
}
}

  return (

    <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p></header>
<form onSubmit={onSubmit}>
      <input type='text' placeholder='Email' className='emailInput' id='email' value={email} 
       onChange={onChange}/>
   <div className='passwordInputDiv'>
   
   <input type={showPassword ? 'text': 'password'} 
      placeholder='Password' className='passwordInput' 
      value={password} id='password' onChange={onChange}/>
     <img src={visibilityIcon} alt="show Password" 
     className="showPassword" 
     onClick={() => setShowPassword(!showPassword)} />
   </div>

   <Oauth />

   <Link to='/forgot-password' className='forgotPasswordLink'>
     Forgot Password</Link>
    <div className='signInBar'>
      <p className='signInText'>
        SignIn
      </p>
      <button className='signInButton'>
        <ArrowRightIcon fill='#ffffff' width='34px' height='34px'
        />
        </button>
    </div>
</form>
<Link to='/sign-up' className='registerLink'>
  SignUp Instead
</Link>


    </div>

  )
}
export default SignIn