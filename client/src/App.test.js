import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import Display from './components/Display';
import PlayesCards from './components/PlayersCard';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('containes Name Megan Rapino', async () => {
  const{findByText} = rtl.render(<App />);
  findByText(/Megan Rapino/i);
});