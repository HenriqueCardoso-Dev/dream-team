import React from "react";

const DefaultButton = (props) => {
  return (
      <div className="input-field my-4 d-flex align-items-start flex-column">
        <button className={`btn btn-${props.color} fw-bolder py-2 px-3`}>
          {props.children}
        </button>
      </div>
  )
}

export default DefaultButton;