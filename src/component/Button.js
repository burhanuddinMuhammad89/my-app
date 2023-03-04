function Button(props) {
    return <button className={"btn " + props.color}>{props.children}</button>;
  }
  
  export default Button;  