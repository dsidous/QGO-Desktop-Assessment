import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemListContainer } from '../itemListContainer';

const defaultProps = {
  onDelete: (f) => f,
  onComplete: (f) => f,
};

describe('ItemListContainer', () => {
  it('renders without crashing', () => {
    shallow(<ItemListContainer {...defaultProps} />);
  });

  it('should call onDelete with the itemId', () => {
    
  });

  it('should call onComplete with the itemId', () => {

  });
  
  
});