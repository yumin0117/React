import React from "react";
import Book from "./Book";
import "./BookList.css";

//데이터 배열(HashMap, JSON type)
const books = [
    {
        title: "처음 만난 리액트",
        author : "김소플",
        coverImage : "https://image.yes24.com/goods/172506733/XL"
    },
    {
        title : "데이터베이스실습",
        author : "박우창",
        coverImage : "https://image.yes24.com/goods/124326403/XL"
    },
    {
        title : "난생 처음 자바",
        author : "우재남",
        coverImage : "https://image.yes24.com/goods/119842978/XL"
    },
    {
        title: "싯다르타",
        author : "헤르만 헤세",
        coverImage : "https://image.yes24.com/goods/257435/XL"
    },
    {
        title : "니체의 초월자",
        author : "프리드리히 니체",
        coverImage : "https://image.yes24.com/goods/161401496/XL"
    }
]

function BookList() {
    return(
      <div className={"bookListWrapper"}>
          {books.map((book) => {
              return(
                  <Book
                      title={book.title}
                      author={book.author}
                      coverImage={book.coverImage}
                  />
              );
          })}
      </div>
    );
}

export default BookList;