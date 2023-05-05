const BlogShow=(props)=>{
    
    console.log(props.props)
    return (
        <>
        <div style={{marginTop:30}}>
            <h1 style={{textAlign:'center'}}>This Blog is About :{props.props?.categories?.title}</h1>
            <img src={props.props?.mainImage?.asset?.url} alt="" />
            <h1>{props.props?.slug.current}</h1>
        </div>
        
        </>
    )
}

export default BlogShow