import CompB  from "./CompB";

function CompA(){
    let name = 'Vikram'
    return <div>
         <h2>In Comp A</h2>
         <CompB userName={name}/>
         
    </div>
}

export default CompA;

//Here this an Functional Component