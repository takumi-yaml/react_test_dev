import React from 'react';
import { shallow } from 'enzyme';
import assert from 'power-assert';

import CommentBox from '../src/CommentBox';
import CommentForm from '../src/CommentForm';



describe('<CommentBox />', ()=>{
  it('CommentBoxにはh1がある', ()=>{
    const wrapper = shallow(<CommentBox />);
    const label = wrapper.find('h1');
    assert(label.length == 1);
  });
});

