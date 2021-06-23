import React, { Component } from 'react';
import * as Manager from './manager/components';

class SelectMode extends Component {
  render() { 
    return ( 
        <Manager.App/>
     );
  }
}
it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
 
export default SelectMode;
