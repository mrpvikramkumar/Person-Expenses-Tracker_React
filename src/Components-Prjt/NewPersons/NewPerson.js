import React from "react";
import PersonForm from "./PersonForm";
import './NewPerson.css'

const NewPerson = (props) =>{
    const savePersonDataHandle = (enterPersonData) =>{
        const personData ={
            ...enterPersonData,
            id: Math.random().toString()
        };
        props.onAddPerson(personData);
    };

    return <div className="new-person">
        <PersonForm onSavePersonData ={savePersonDataHandle}/>
    </div>
};

export default NewPerson;