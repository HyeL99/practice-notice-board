import React, { useState } from 'react'
import RegisterOrEdit from './Section/RegisterOrEdit'
import { useDispatch } from 'react-redux/es/exports'
import { articleActions } from '../../../slice/articleSlice'

const RegisterPage = () => {
    const [titleValue, setTitleValue] = useState("")
    const [contentValue, setContentValue] = useState("")
    const [isForUpdate, setIsForUpdate] = useState(false)
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        setTitleValue(event.target.value)
    }

    const onContentChange = (event) => {
        setContentValue(event.target.value)
    }

    const onSubmitArticle = (event)=>{
        event.preventDefault();
        const article = {title: titleValue, content: contentValue}
        dispatch(articleActions.registerArticle(article))
    }

  return (
    <div>
        <RegisterOrEdit titleValue = {titleValue} contentValue={contentValue} handleTitleChange={onTitleChange} handleContentChange={onContentChange} handleSubmit={onSubmitArticle} updateRequest={isForUpdate}/>
    </div>
  )
}

export default RegisterPage
