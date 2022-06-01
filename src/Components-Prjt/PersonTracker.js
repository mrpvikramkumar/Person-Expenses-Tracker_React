import React from 'react'
import PersonDate from './PersonDate';
import Card from './Card'
import './PersonTracker.css';

const PersonTracker =(props)=> {
  


  return (
    <Card className='customer-item'>
      <PersonDate date={props.date} />
      <div className='customer-item__description'>
        <h2>{props.title}</h2>
        <div className='customer-item__price'>₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default PersonTracker;
