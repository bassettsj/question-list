import React from 'react';
import { render } from 'react-dom';
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

render(<App/>, document.getElementById('container'));
