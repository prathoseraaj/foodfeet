import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import './Exploremenu.css'

const Exploremenu = ({category, setCatogory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-test'>Indulge in a diverse menu featuring a delectable array of dishes crafted to satisfy every palate. From comforting classics to bold, innovative flavors, our selection is designed to cater to your cravings and elevate your dining experience. Whether you're in the mood for a hearty meal or a light bite, we have something for everyone to enjoy!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCatogory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    <hr />
    </div>
  )
}

export default Exploremenu