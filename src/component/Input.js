function Input({label, name, value, type}) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" name={name} value={value} type={type} />
      </div>
    );
  }
  
  export default Input;
  