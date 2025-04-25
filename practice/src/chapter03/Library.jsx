import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 리액트" pages={200}></Book>
            <Book name="처음 만난 AWS" pages={300}></Book>
            <Book name="처음 만난 파이썬" pages={400}></Book>
        </div>
    );
}

export default Library;