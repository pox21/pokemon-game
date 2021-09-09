import React from 'react';
import ReactDOM from 'react-dom';

const AppList = () => {
  return (
    <ul>
      <li>ada</li>
      <li>ada2</li>
    </ul>
  );
}

const AppHeader = () => {
  return <h1>Hello World</h1>;
}

const App = () => {
  return (
    <>
      <AppHeader />
      <AppList />
      <AppHeader />
      <AppList />
      <AppHeader />
      <AppList />
      <AppHeader />
      <AppList />
    </>
    
  );
}


ReactDOM.render(<App />, document.getElementById('root'));