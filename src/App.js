import logo from "./logo.svg";
import "./style.css";
import MyComponent from "./component/MyComponent";
import NestingComponent from "./component/NestingComponent";
import Input from "./component/Input";
import Button from "./component/Button";
import Todo from "./component/Todo";

function App() {
  const name = "Visioon";
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <MyComponent />
      <NestingComponent />

      <h1>Login</h1>
      <p>Login to your account</p>
      <Input label="Username" type="text" />
      <Input label="Passwordss" type="password" />
      <Button color="blue">Submit</Button>
      <Button color="yellow">Cancel</Button>

      <h1>Todo List</h1>
      <Todo />
    </div>
  );
}

export default App;
