import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Exploe Our Menu</h1>
      <p className='explore-menu-text'>Choose From a deverse menu feturing a decalective array of dishes carfted with the finest ingridents and culinary expertis. our mission is satisfaying creving and eavaluate your daining exprience,one delecius meals at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
               <p>{item.menu_name}</p>
            </div>

          )
            
          }
        )}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
