import React from 'react';
class CompC extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('In CompC', this.props);
        return <div>
            <h2> In CompC</h2>
        </div>
    }
}

export default CompC;