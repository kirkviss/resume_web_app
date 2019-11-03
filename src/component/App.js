import React from 'react';
import './App.css';
import CategoryLayer from './CategoryLayer.js'


export default class App extends React.Component {

  render() {
    return (
      <div className="component-app">
        
          < CategoryLayer filePath='markdown/intro.md'/>
        
        
      </div>
    )
  }
}
