import React from 'react'

const RegisterOrEdit = ({titleValue, contentValue, handleTitleChange, handleContentChange, handleSubmit, updateRequest}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Title: </label>
        <input onChange={handleTitleChange} value={titleValue} type="text" name="title"/>
        <hr></hr>
        <div>
            <textArea onChange={handleContentChange} value={contentValue} name="content"/>
        </div>
        <button onClick={handleSubmit}>{updateRequest? "수정" : "등록"}</button>
      </form>
    </div>
  )
}

export default RegisterOrEdit
