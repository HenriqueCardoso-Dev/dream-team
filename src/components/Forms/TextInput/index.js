import React from "react";

const TextInput = (props) => {

  const save = (event) => {
    props.setValue(event.target.value);
  }

  return (
    <div className="input-field my-4 d-flex align-items-start flex-column">
      <label htmlFor="text-field" className="fw-bolder">{props.label}</label>
      <input onChange={save} type="text" className="form-control" placeholder={props.placeholder} required={props.required} value={props.value}/>
    </div>
  ) 
}

export default TextInput;