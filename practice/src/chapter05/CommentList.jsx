import React from "react";
import Comment from "./Comment";

// Comment 데이터를 별도의 객체로 분리하기
const comments = [
    {
        name: "일",
        comment: "안녕하세요, 일입니다.",
    },
    {
        name: "이",
        comment: "안녕하세요, 이입니다.",
    },
    {
        name: "삼",
        comment: "안녕하세요, 삼입니다.",
    },
]; 

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                );
            })}
        </div>
    );
} 

export default CommentList;