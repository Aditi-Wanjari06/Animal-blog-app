import "./blogcard.css"
import "./../../data"
import { Link } from "react-router-dom"

function blogcard({id,title,content,image,author_name,date}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
        <img src={image} alt="Birman" className="blog-img" />
         <h1 className="blog-title">{title}</h1>
         <p className="blog-content">{content.substring(0,65)}...</p>
         <span className="author-name">By: {author_name}</span>
    </Link>
  )
}

export default blogcard