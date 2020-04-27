import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button>defalt</Button>
      <Button size={ButtonSize.lg}>lg</Button>
      <Button size={ButtonSize.sm} disabled>lg</Button>
      <Button btnType={ButtonType.link} disabled>go 百度</Button>
      </header>
    </div>
  );
}

export default App;