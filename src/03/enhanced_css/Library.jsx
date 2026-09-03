import React from "react";
import Book from "./Book";

function Library(){
    return(
        <div className="library-container">
            <Book name="니체의 초월자" numOfPage={300} imgUrl="https://image.yes24.com/goods/161401496/XL"/>
            <Book name="모순" numOfPage={200} imgUrl="https://image.yes24.com/goods/8759796/XL"/>
            <Book name="급류" numOfPage={500} imgUrl="https://image.yes24.com/goods/116586303/XL"/>
            <Book name="처음 만나는 자바스크립트" numOfPage={220} imgUrl="https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg"/>
            <Book name="싯다르타" numOfPage={180} imgUrl="https://image.yes24.com/goods/257435/XL"/>
        </div>
    );
}

export default Library;