import React,{createContext, useState}from 'react'
export const Value = createContext();
const ValuesContext = ({children}) => {
    const [values,setValues] = useState({diet:"null",shower:"null",heat:"null",Gbill:"null",Transport:"null",Vtype:"null",Tair:"null",VmD:"null",Wbs:"null",Wbwc:"null",Tv:"null",NewClothes:"null",InternetDaily:"null"});
  return (
    <Value.Provider value={[values,setValues]}>
        {children}
    </Value.Provider>
  )
}

export default ValuesContext