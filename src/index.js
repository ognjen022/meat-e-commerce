import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./components/AppRouter";
import "./index.css"

class App extends React.Component {
  render(){
    return(
        <AppRouter />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

