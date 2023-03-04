import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';
import NestingComponent from './component/NestingComponent';

function App() {
  const name = "Visioon";
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <MyComponent />
      <NestingComponent />
    </div>
  );
}

export default App;
