import React,{createContext, useState}from 'react'
export const Value = createContext();
const ValuesContext = ({children}) => {
    const [values,setValues] = useState( 
      {diet:"null",
      shower:"null",
      heat:"null",
      Gbill:0,
      Transport:"null",
      Vtype:"null",
      Tair:"null",
      VmD:0,
      Wbs:"null",
      Wbwc:0,
      Tv:0,
      NewClothes:0,
      InternetDaily:0});
    const [docs,setDocs] = useState("")
    const [pdocs,setPDocs] = useState("")
    const [data,setData] = useState("")
    const [id,setId] = useState("")
    const [body,setBody] = useState("")
    const [sex,setSex] = useState("")
    const [personal,setPersonal] = useState("")
    const [input,setInput ]  = useState(1);
    const [object,setObject] = useState("")
  return (
    <Value.Provider value={[values,setValues,docs,setDocs,data,setData,pdocs,setPDocs,id,setId,body,setBody,sex,setSex,personal,setPersonal,input,setInput,object,setObject]}>
        {children}
    </Value.Provider>
  )
}

export default ValuesContext