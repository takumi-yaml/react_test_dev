import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'power-assert';
import sinon from 'sinon';

import CommentForm from '../src/CommentForm';



describe('<CommentForm />', ()=>{
  it('CommentForm has submit button', ()=>{
    const wrapper = shallow(<CommentForm />);
    const button = wrapper.find('input[type="submit"]');
    assert(button.length == 1);
  });

});

