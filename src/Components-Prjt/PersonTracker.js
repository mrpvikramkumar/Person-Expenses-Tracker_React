import PersonDate from './PersonDate';
import './PersonTracker.css';

function PersonTracker(props) {
  return (
    <div className='customer-item'>
      <PersonDate date={props.date} />
      <div className='customer-item__description'>
        <h2>{props.title}</h2>
        <div className='customer-item__price'>₹{props.amount}</div>
      </div>
    </div>
  );
}

export default PersonTracker;
