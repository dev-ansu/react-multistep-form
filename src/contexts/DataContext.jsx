import {createContext, useContext, useState} from "react"


const DataContext = createContext();



export const DataContextProvider = ({children})=>{
    const [data, setData] = useState({});

    const handleSaveDataFromStep = (e)=>{
        const {name, value} = e.target;
        
        setData((prev)=>({
            ...prev,
            [name]: value,
        }))
    }
    
    return (
        <DataContext.Provider value={{data, handleSaveDataFromStep}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = ()=>{
    const context = useContext(DataContext);
    return context;
}