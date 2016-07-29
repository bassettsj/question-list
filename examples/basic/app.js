import React from 'react';
import QuestionList from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>question-list</h1>
        <QuestionList/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
