import React from "react";

const ComboBox = (props) => {
  const save = (event) => {
    props.setValue(event.target.value)
  }

  return (
    <div className="input-field my-4 d-flex align-items-start flex-column">
      <label className="fw-bolder">{props.label}</label>

      <select className="form-select" required={props.required} value={props.value} onChange={save}>
        <option disabled value="">{props.placeholder}</option>
        {props.items.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
    </div>
  )
}

export default ComboBox;