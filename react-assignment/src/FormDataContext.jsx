import React, { useContext, useState, createContext } from 'react'
import User from './User';
import Admin from './Admin';

const FormDataContext = createContext(); //create context

export const FormDataProvider = ({children}) => {
    const [dataArray,setDataArray] = useState([]);
    const [newData,setNewData] = useState({name: '',lastname: '',position: ''})
    return(
        <FormDataContext.Provider value={{dataArray,setDataArray,newData,setNewData}}>
            {children}
        </FormDataContext.Provider>
    );
}

const useFormData = () => {
    const context = useContext(FormDataContext);
    if (!context){
        throw new Error('useFormData must be use within a FormDataProvider');
    }
    return context;
}
export default useFormData