import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"salad"
    })
    const onchangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
setData(data=> ({...data,[name]:value}))

    }
    const onSubmitHandler=async(event)=>{
event.preventDefault();
const formData=new FormData();
formData.append("name",data.name)
formData.append("description",data.description)
formData.append("price",Number(data.price))
formData.append("category",data.category)
formData.append("image",image)
const responce= await axios.post(`${url}/api/food/add`,formData);

if(responce.data.success){
setData({
        name:"",
        description:"",
        price:"",
        category:"salad"
})
setImage(false)
toast.success(responce.data.message)
}
else{
    toast.error(responce.data.message)
}


}


    
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>upload Image</p>
<label htmlFor="image">
    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
</label>
<input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
<div className="add-product-name flex-col">
<p>product name</p>
<input onChange={onchangeHandler} value={data.name} type="text" name='name' placeholder='type here'/>
</div>
<div className="add-product-description flex-col">
   <p>product description</p>
   <textarea onChange={onchangeHandler} value={data.description} name="description"  rows="6"placeholder='write content here' >
    </textarea> 

</div>
<div className="add-category-price">
    <div className="add-category flex-col">
<p>product category</p>
<select onChange={onchangeHandler} name="category" >
    <option value="Salad">Salad</option>
    <option value="Rolls">Rolls</option>
    <option value="Deserts">Deserts</option>
    <option value="Sandwich">Sandwich</option>
    <option value="cake">cake</option>
    <option value="pure veg">pure veg</option>
    <option value="pasta">pasta</option>
    <option value="Noodles">Noodles</option>
</select>
    </div>
    <div className="add-price flex-col">
<p>product price</p>
<input onChange={onchangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
    </div>
</div>
<button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
