import React from 'react'
import './blog.css'

const BlogPost = ({src,heading,text}) => {
    return (
        <article>
            <img src={src}/>
            <div className='content'>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </article>
    )
}


export default BlogPost