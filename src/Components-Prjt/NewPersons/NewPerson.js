import React, { useState } from "react";
import PersonForm from "./PersonForm";
import './NewPerson.css'

const NewPerson = (props) =>{
    const [isChanging, setIsChanging] = useState(false);
    const savePersonDataHandle = (enterPersonData) =>{
        const personData ={
            ...enterPersonData,
            id: Math.random().toString()
        };
        props.onAddPerson(personData);
        setIsChanging(false)
    };

    const startChangingHanlder =()=>{
        setIsChanging(true);
    }

    const stopChangingHandle = () =>{
        setIsChanging(false);
    }

    return <div className="new-person">
        {!isChanging && <button onClick={startChangingHanlder}>Add New Expense</button>}
        {isChanging && <PersonForm onSavePersonData ={savePersonDataHandle} onCancel={stopChangingHandle}/>}
    </div>
};

export default NewPerson;