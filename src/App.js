import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewForm from './NewForm'
import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      contents: []
    }
  }

  removeContent = (index) => {   
    const {contents} = this.state
 
    this.setState({ contents: contents.filter((content, i) => {return i !== index })});
  }

  handleSubmit = (content) => {
    this.setState({contents: [...this.state.contents, content]})
  }

  render(){
    return (
      <div className="App container">
        <header className="App-header">
          <h1>React Tutorial</h1>
          <p>Add a character with a name and a job to the table.</p>
        </header>
        <Table tableContent={this.state.contents} removeContent={this.removeContent}/>
        <NewForm handleSubmit={this.handleSubmit} />
      </div>
    )};
}

export default App;
