import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { articleActions } from '../../../slice/articleSlice'
import { useDispatch, useSelector } from 'react-redux'
import ArticleDetail from './Sections/ArticleDetail'
import {Link} from 'react-router-dom'
import { Button } from 'antd'
import Comment from './Sections/Comment'

const ArticlePage = () => {
  const dispatch = useDispatch()
  const {articleID} = useParams()
  const {commentValue, setCommentValue} = useState("")

  useEffect(()=>{dispatch(articleActions.getArticle(articleID))}, [articleID])

  const {id, title, content} = useSelector((state)=>({id:state.articleReducers.id, title:state.articleReducers.title, content:state.articleReducers.content}))
  const date = useSelector((state)=>state.articleReducers.date)
  const views = useSelector((state)=>state.articleReducers.views)

  const stateForProps = useSelector((state)=>state.articleReducers)

  console.log(articleID)

  const onDeleteClick = ()=>{
    if(!window.confirm("삭제하시겠습니까?")) return false
    dispatch(articleActions.deleteArticle(articleID))
  }

  const onCommentChange = (e)=>{
    setCommentValue(e.currentTarget.value)
  }

  const onCommentSubmit = ()=>{}

  return (
    <div>
      <div>
        <ArticleDetail articleID={articleID} title={title} content={content} views={views} date={date} handleDeleteClick={onDeleteClick} handleComment={<Comment comment={commentValue} handleCommentChange={onCommentChange} handleCommentSubmit={onCommentSubmit} />} />
      </div>
    </div>
  )
}
export default ArticlePage
