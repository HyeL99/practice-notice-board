import React, { useState, useEffect } from 'react'
import RegisterOrEdit from './Section/RegisterOrEdit'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { articleActions } from '../../../slice/articleSlice'
import { useParams } from 'react-router'

const RegisterPage = (props) => {
    const [titleValue, setTitleValue] = useState("")
    const [contentValue, setContentValue] = useState("")
    const [isForUpdate, setIsForUpdate] = useState(false)

    const {id, views, date, editDate, title, content } = useSelector((state)=>({id:state.articleReducers.id, views:state.articleReducers.views, date:state.articleReducers.date, editDate:state.articleReducers.editDate, title:state.articleReducers.title, content:state.articleReducers.content}), shallowEqual)

    const dispatch = useDispatch();
    const {articleID} = useParams()

    const onTitleChange = (event) => {
        setTitleValue(event.target.value)
    }

    const onContentChange = (event) => {
        setContentValue(event.target.value)
    }

    const onSubmitArticle = (event)=>{
        event.preventDefault();
        if(titleValue === "" ||titleValue === null || titleValue === undefined){
            alert("제목을 작성하십시오.")
            return false;
        }
        if(contentValue === "" ||contentValue === null || contentValue === undefined){
            alert("내용을 작성하십시오.")
            return false;
        }
        const article = {id: id, title: titleValue, content: contentValue, views: views, date: date, editDate:editDate?Date.now():editDate,}
        dispatch(articleActions.registerArticle(article))
        if(isForUpdate){
            dispatch(articleActions.updateArticle(article))
        }else{
            dispatch(articleActions.registerArticle(article))
        }
    }

    useEffect(()=>{
        const searchParams = new URLSearchParams(props.location.search)
        if(searchParams.get("isForEdit")=="true"){
            dispatch(articleActions.fetchArticle(articleID))
            setIsForUpdate(true)
        }
        setTitleValue(title)
        setContentValue(content)
    },[id])

  return (
    <div>
        <RegisterOrEdit titleValue = {titleValue} contentValue={contentValue} handleTitleChange={onTitleChange} handleContentChange={onContentChange} handleSubmit={onSubmitArticle} updateRequest={isForUpdate}/>
    </div>
  )
}

export default RegisterPage
