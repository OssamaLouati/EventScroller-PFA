import React from 'react'
import pic from '../../assets/images/create.svg'
import './index.scss'
export default function Create() {
  return (
      <>
        <ul className='body'>
           <li><img src={pic} alt="yooo"/></li> 
           <li><p>Are you ready to take the first step to take your events to the future? </p></li>
           <li><form action='../../post' method='post' >
                <button  type="submit">
                     Create an  Event 
                </button>
            </form>
            </li>
           
           
        </ul>
    </>
  )
}
