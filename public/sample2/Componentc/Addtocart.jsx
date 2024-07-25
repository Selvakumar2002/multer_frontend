import React , {useEffect, useState,useContext} from 'react'
import { json } from 'react-router-dom'
import { MyContext } from '../MyContext/MyProvider'
import'../Styles/Addtocart.css'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
function Addtocart() {
    // const [ data,setData]=useState([])
    const {item,setItem} = useContext(MyContext)
    const [totalAmt, setTotalAmt] = useState(0);
    const [totalItem,settotalItem] = useState(0)
    
    useEffect(() => {
      let total = 0;
      let count =  0 
      item.forEach(item => {
        total += item.Rate;
      });
      setTotalAmt(total);
      settotalItem(item.length)
    }, [item]);


    const handleDelete = (id,status) =>{
      const statused = item.forEach((item)=>{
         if(item.id === id){
          return item.status = false
         }
      })
        const filterdData = item.filter((item)=> item.id !== id);
        setItem(filterdData) 

    }
    const handleMinus = (id) =>{
        const  minusItems = item.map(item =>{
          if(item.id === id && item.quantity > 0){
            return {...item,quantity:(item.quantity || 1) - 1}
          }
          return item
        })
        setItem(minusItems)
    }

    const handlePlus =(id)=>{
       const updatedItem = item.map((item)=>{
            if(item.id === id){
              return  {...item,quantity:(item.quantity || 1)+1}
            }
            return item    
       })

       setItem(updatedItem)
      
      }

  return ( 

    <div className='select-item'>
      <div className="select-item-list">
         {item.map((item,index)=><div className="select-item d-flex" key={index}>
        
              <div className="select-item-img">
              <img src={item.img} alt={item.title} />
              </div>
              <div className="select-item-details ">
                  <h4>{item.title}</h4>
                  <div className='delete-box'>
                  <h5>{item.Rate}</h5>
                  <div>
                  <CiCircleMinus size={30} className='minus-icon' onClick={()=>{handleMinus(item.id)}}/>
                  {item.quantity || 1}
                  <IoIosAddCircleOutline size={30} className='plus-icon' onClick={()=>{handlePlus(item.id)}}/>
                  <MdOutlineDeleteOutline size={30} onClick={()=>handleDelete(item.id)} />
                  </div>
                  </div>
                  
                  </div>
        </div> )}
        </div>
      <div className="total-box d-flex">
          <div className="total">
            <h4>Total ${totalAmt}</h4>
            <p>{totalItem}items</p>
          </div>
          <div className="btn-box">
            <button className='btn btn-primary' >Continue</button>
          </div>
      </div>

    </div>
     

  )
}

export default Addtocart