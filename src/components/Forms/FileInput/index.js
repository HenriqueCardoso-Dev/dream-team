import React from "react";

const FileInput = () => {
  return (
    <div className="input-field my-4 d-flex align-items-start flex-column">
      <label htmlFor="formFileSm" className="fw-bolder">
        Foto de Perfil
      </label>
      <input className="form-control" type="file"/>
    </div>
  )
}

export default FileInput;