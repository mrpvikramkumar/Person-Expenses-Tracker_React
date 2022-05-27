import PersonTracker from './PersonTracker';
import Card from './Card';
import PersonFilter from './NewPersons/PersonFilter';
import './Persons.css';
import { useState } from 'react';

function Persons(props) {
  const[filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="persons">
      <PersonFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <PersonTracker
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <PersonTracker
        title={props.items[1].title}
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
      />
    </Card>
  );
}

export default Persons;
