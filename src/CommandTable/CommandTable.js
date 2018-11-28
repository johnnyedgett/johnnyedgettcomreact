import React, { Component } from 'react'
import Data from './exampleData'

class CommandTable extends Component {
  // This is an example constructor for a react component.
  // Things that are in the props are passed whenever you create the component.
  // The component can have properties itself. Reference: React State. (https://reactjs.org/docs/state-and-lifecycle.html)
  constructor(props){
    super(props);

    // A state is what you use to manage the fields of the component itself 
    this.state = {
      data: ''
    };

    // Binding the 
    this.handleSubmit = this.handleSubmit.bind(this)
  }    
  componentDidMount(){
    this.setState(state => ({
      data: Data
    }))
  }
  handleSubmit() {
    console.log('No problem')
    Data.push({"testCase":"3","commands":"THISISAFAKECOMMAND,ER"})
    this.setState(state => ({
      data: Data
    }))
  }
  render(){
    const CommandTable = {
      margin: '10px',
      border: '5px solid black'
    }
    const CommandTableData = {
      border: '2px solid red'
    }
    // You could have some data loaded here from the database to display in the table 
    // Alternatively, could also call some function here and pass data from a text field 
    //  to update and modify columns in the table.
    const tableElements = Data.map((Data) => 
    <tr key={Data.testCase}>
      <td style={CommandTableData}>{Data.testCase}</td>
      <td style={CommandTableData}>{Data.commands}</td>
    </tr>
    )
    return (
      <div>
        <table style={CommandTable}>
          <tbody>{tableElements}</tbody>
        </table>
        <button onClick={this.handleSubmit}>Click me to add something to the data list.</button>
      </div>

    )
  }
}

export default CommandTable