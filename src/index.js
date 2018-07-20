import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }


  render() {
    return (
    	<div>
1111  
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
