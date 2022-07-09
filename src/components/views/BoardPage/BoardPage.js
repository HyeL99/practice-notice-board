import React, { useEffect } from 'react'
import BoardList from './Section/BoardList'
import {Link} from "react-router-dom"
import { Typography, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../../../slice/boardSlice'

const {Title} = Typography

const BoardPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardActions.getBoard())
  }, [dispatch])

  const {board, isLoading, isSuccess,error} = useSelector((state)=>({board: state.boardReducers.board, isLoading: state.boardReducers.isLoading, isSuccess: state.boardReducers.isSuccess, error: state.boardReducers.error}))
  console.log("board:",board)

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div>
        <Link to="/register?isForEdit=false">
          <Button type="primary">New Post</Button>
        </Link>
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title>Board Title</Title>
      </div>
      <div>
        {error ? (<h2>에러 발생: {error}</h2>) : isSuccess && board.length > 0 ? (<BoardList board={board} />) : isSuccess && board.length <= 0 ? (<p> 조회할 내용이 없습니다. </p>) : (<p> 목록을 불러오는 중입니다. </p>)}
      </div>
    </div>
  )
}

export default BoardPage
