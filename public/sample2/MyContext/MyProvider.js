import React,{createContext,useState} from 'react'

export const MyContext = createContext()

export function MyProvider({children}) {

    const [item,setItem]=useState([])
    const [count,setCount] = useState(0)
    const [favList, setFavList] = useState([]);


  return (
    <MyContext.Provider value={{item,setItem,count,setCount,favList,setFavList}} >
        {children}
    </MyContext.Provider>
  )
}
