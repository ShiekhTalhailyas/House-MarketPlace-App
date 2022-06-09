import { Link, useNavigate } from 'react-router-dom'
//import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Slider from '../components/Slider'
import {FaChessPawn} from "react-icons/fa";

function Explore() {
  const navigate = useNavigate()
  const Surprise =() =>{
    navigate('/surprise')
  } 
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <div style={{textAlign:'center',color:'#183a1d'}}>
          <p onClick={Surprise}> <FaChessPawn/> Surprise
           </p>
        </div>
        
        <Slider />

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore