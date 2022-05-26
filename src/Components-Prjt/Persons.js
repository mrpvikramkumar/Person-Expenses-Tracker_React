import PersonTracker from './PersonTracker';
import './Persons.css';

function Persons(props) {
  return (
    <div className="persons">
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
    </div>
  );
}

export default Persons;
