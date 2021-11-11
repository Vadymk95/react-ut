import React, { useEffect, UseState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS',
];

const App = () => {
  return (
    <h1 className="app">
      <span>Hello world!</span>
      <div className="app-header">
        <List items={data} />
      </div>
      <Search />
    </h1>
  );
};

export default App;
