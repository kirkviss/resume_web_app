import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('the page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('display navigation path', ()=> {
  
}); 
// it('displays about information from the markup page', () => {});
// it('it provides links to my linkedin', () => {});
// it('is centered in the middle of the page', () =>{});