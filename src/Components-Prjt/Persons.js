import PersonTracker from './PersonTracker';
import Card from './Card';
import PersonFilter from './NewPersons/PersonFilter';
import PersonChart from './PersonChart';
import './Persons.css';
import React, { useState } from 'react';

function Persons(props) {
  const[filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

  const filteredPersons = props.items.filter(person=>{
    return person.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className="persons">
      <PersonFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
             {filteredPersons.length === 0 ? (<p style={{ color:'white', textAlign: 'center'}}>No Data Found</p> ): (
             filteredPersons.map((person) =>(
            <PersonTracker 
              key ={person.id} 
              title={person.title} 
              amount={person.amount} 
              date={person.date}/>
              )))}
              <PersonChart persons={filteredPersons}/>
      {/* <PersonTracker                  
        title={props.items[0].title}        //the code is commented because, in adding an expense orsome data
        amount={props.items[0].amount}          there would be many number of items of be added and we cannot 
        date={props.items[0].date}            just hardcode(initially adding) the items in react code and save 
      />                                        them we have have used "map" method to achieve this. wherein we  
      <PersonTracker                            can add the same amount of items in by using single line of code
        title={props.items[1].title}           and even add n number of data in the list.
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <PersonTracker
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <PersonTracker
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Persons;
