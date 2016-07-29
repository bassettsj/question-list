import React from 'react';
import { shallow } from 'enzyme';
import QuestionList from '../../index';
import { ok, equal } from 'assert';

/* eslint func-names:0 */
describe('question-list', function() {
  it('should have tests', function() {
    expect(shallow(<QuestionList/>).length).toEqual(1);
  });
});
