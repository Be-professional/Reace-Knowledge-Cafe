import Blogs from "./component/Blogs"
import Bookmarks from "./component/Bookmarks"
import Header from "./component/Header"

function App() {
  

  return (
    <>
      <Header></Header>
      <div className="flex w-full">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
