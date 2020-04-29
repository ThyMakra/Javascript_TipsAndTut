/* 
ES6 arrow notation in class method, implies binding 
*/

// Can replace this expression:
// this.myMethod = this.myMehtod.bind(__this__);
/* 
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        this.state = {};
    }
    
    myMethod = () => {
        // This method is bound Implicitly!!
    }

    render() {
        return (
            <div>
            { this.myMethod() }            
            </div>
        );
    }
}

export default App;
 */
