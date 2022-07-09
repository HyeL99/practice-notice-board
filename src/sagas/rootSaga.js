import { takeLatest, takeEvery } from "redux-saga/effects";
import { articleActions } from "../slice/articleSlice";
import { boardActions } from "../slice/boardSlice";
import { deleteArticleAsync, fetchArticleAsync, getArticleAsync, registerArticleAsync, updateArticleAsync } from "./articleSaga";
import { getBoardAsync } from "./boardSaga";

const { registerArticle, getArticle, fetchArticle, updateArticle, deleteArticle } = articleActions
const {getBoard} = boardActions

export default function* rootWatcher() {
  yield takeLatest(registerArticle.type, registerArticleAsync)
  yield takeEvery(getArticle.type, getArticleAsync)
  yield takeEvery(getBoard.type, getBoardAsync)
  yield takeEvery(fetchArticle.type, fetchArticleAsync)
  yield takeEvery(updateArticle.type, updateArticleAsync)
  yield takeEvery(deleteArticle.type, deleteArticleAsync)
}