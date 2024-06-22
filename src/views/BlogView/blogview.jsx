import "./blogview.css"
import { useParams } from "react-router-dom"
import blog from "../../data"


function BlogView() {

  const {id} = useParams() 
  const selectedBlog = blog.find((blogObject)=>blogObject.id === id)
  return (
    <div>
     <h1 className="blogview-title">{selectedBlog.title}</h1>
     <div className="blogview-container">
     <img src={selectedBlog.image} alt="Birman" className="blogview-img" />
     <p className="blogview-content">{selectedBlog.content}</p>
     </div>
     <span className="blogview-author"> Written By: {selectedBlog.author_name}</span>
    </div>
  )
}

export default BlogView