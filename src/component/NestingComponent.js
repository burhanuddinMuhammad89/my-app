import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function NestingComponent() {
  return (
    <div className="nesting-component">
      <p>And this is a sample of a nested Components</p>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
}

export default NestingComponent;