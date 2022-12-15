import React from 'react'
import { Link} from 'react-router-dom'
import './blog.css'

const BlogPost = ({src,slug,heading,text}) => {
    return (
        <article>
            <img src={src} alt={heading}/> 
            <div className='content'>
                <Link to={slug}>
                    <h2>{heading}</h2>
                </Link>
                <p>{text}</p>
            </div>
        </article>
    )
}


export default BlogPost