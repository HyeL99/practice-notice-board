import { Button, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const {TextArea} = Input

const RegisterOrEdit = ({titleValue, contentValue, handleTitleChange, handleContentChange, handleSubmit, updateRequest}) => {
  return (
    <div style={{maxWidth:"700px", margin:"2rem auto"}}>
      <Link to="/">
        <button>←</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <br />
        <div style={{maxWidth: "700px", margin: "2rem"}}>
          <label>Title: </label>
          <Input onChange={handleTitleChange} value={titleValue} type="text" name="title"/>
          <hr></hr>
          <TextArea onChange={handleContentChange} value={contentValue} name="content"/>
        </div>
        <Button type='danger' onClick={handleSubmit}>{updateRequest? "수정" : "등록"}</Button>
      </form>
    </div>
  )
}

export default RegisterOrEdit
