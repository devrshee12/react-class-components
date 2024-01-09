import './App.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        {/* <UsersList/> */}
        {/* <h1>hello</h1> */}
        <h1>Hello Everyone</h1>
        <div className='btn-container'>
        <button className='btn'>
          <Link to="/counter" style={{textDecoration:"none"}}>Go to Counter</Link>
        </button>

        <button className='btn'>
          <Link to="/users" style={{textDecoration:"none"}}>Go to Users</Link>
        </button>

        </div>
      </header>
    </div>
    )
  }
}

export default App;
