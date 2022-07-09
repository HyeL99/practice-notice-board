import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState:{id:0, title:"", content:"", views:0, date: Date.now(), editDate: "",},
    reducers: {
        registerArticle:(state, {payload: article})=>{
            console.log(article);
        },
        getArticle:(state, {payload: id})=>{
            console.log(id)
        },
        getArticleAsync:(state, {payload: article})=>{
            console.log(article)
            return{...state, id: article.id, title: article.title, content: article.content, views: article.views, date: article.date, editDate: article.editDate}
        },
        fetchArticle:(state, {payload: id})=>{
            console.log("게시글 조회 액션 호출 -- fetchArticle")
        },
        updateArticle:(state, {payload:article})=>{
            console.log("게시글 수정 액션 호출 -- updateArticle")
        }
    }
})

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;