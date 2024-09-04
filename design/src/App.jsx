import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

    const [data,setData] = useState([])

    useEffect(()=>{

        const getData = async()=>{
          try
          {
            const response = await axios.get("http://localhost:5000/get")
            setData(response.data)
          }catch(err)
          {
            console.log(err)
          }
        }
        getData()
    },
    
      
    [])

  return (
    <div>
      <div>
        <input type='text' style={{paddingInline:20, marginTop:10,paddingBlock:8}} placeholder='Enter name'/><br></br>
        <input type='age' style={{paddingInline:20, marginTop:10,paddingBlock:8}} placeholder='Enter age'/><br></br>
        <button style={{paddingInline:20, marginTop:10,paddingBlock:8}}>Submit</button>
      </div>
    </div>
  )
}

export default App