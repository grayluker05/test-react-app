import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(){
        super();

        this.state = {
            name: 'Grayson',
            age: 18
        }
        // this.changeName = this.changeName.bind(this) 
        // needed for normal functions
    }

    changeName = () => {
        this.setState({
            name: 'Matias'
        })
    }

    render(){
        return (
            <div className='class-component-container'>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default ClassComponent;