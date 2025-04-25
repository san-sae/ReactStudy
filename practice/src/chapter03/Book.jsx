import React from "react";

function Book(props){   
    return(
        <div>
            <h1>{`책 제목: ${props.name}`}</h1>
            <h2>{`총 페이지 수: ${props.pages}`}</h2>
        </div>
    );
}

/* jsx 사용하지 않은 코드
function Book(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `책 제목: ${props.name}`
            ),
            React.createElement(
                'h2',
                null,
                `총 페이지: ${props.pages}`
            )
        ]
    );
}
*/

export default Book;