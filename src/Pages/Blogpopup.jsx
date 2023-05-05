const BlogPopup=({src,category,slug})=>{
    return (
        <>
        <div style={{marginTop:30}}>
            <h1 style={{textAlign:'center'}}>This Blog is About :{category}</h1>
            <img src={src} alt="" />
            <h1>{slug}</h1>
        </div>
        
        </>
    )
}
export default BlogPopup