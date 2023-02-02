import BlogNav from "../Blog/BlogNav"

const Layout = ({children,isBlack}) => {
    return (
        <>
            <BlogNav />
            {children}
        </>
    )
}


export default Layout