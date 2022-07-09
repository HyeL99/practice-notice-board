import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { articleActions } from '../../../slice/articleSlice'
import { useDispatch, useSelector } from 'react-redux'
import ArticleDetail from './Sections/ArticleDetail'
import {Link} from 'react-router-dom'
import { Button } from 'antd'

const ArticlePage = () => {
  const dispatch = useDispatch()
  const {articleID} = useParams()

  useEffect(()=>{dispatch(articleActions.getArticle(articleID))}, [articleID])

  const {id, title, content} = useSelector((state)=>({id:state.articleReducers.id, title:state.articleReducers.title, content:state.articleReducers.content}))
  const date = useSelector((state)=>state.articleReducers.date)
  const views = useSelector((state)=>state.articleReducers.views)

  const stateForProps = useSelector((state)=>state.articleReducers)

  console.log(articleID)
  return (
    <div>
      <div>
        <ArticleDetail articleID={articleID} title={title} content={content} views={views} date={date} />
      </div>
      <div style={{margin:"2rem auto"}}>
        <Link to={`/edit/${articleID}?isForEdit=true`}>
          <Button type="primary">수정</Button>
        </Link>
      </div>
      
    </div>
  )
}
export default ArticlePage
