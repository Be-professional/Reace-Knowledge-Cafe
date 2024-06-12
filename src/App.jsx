import { useState } from "react"
import Blogs from "./component/Blogs"
import Bookmarks from "./component/Bookmarks"
import Header from "./component/Header"

function App() {
  const [bookmarks, setBookmarks]=useState([]);

  const addBookmarksHandle= blog =>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs addBookmarksHandle={addBookmarksHandle}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
