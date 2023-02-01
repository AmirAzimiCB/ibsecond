import BlogNav from "../Blog/BlogNav"
import Navbar from "../Navigation/Navbar"

const Layout = ({children,isBlack}) => {
    return (
        <>
            <BlogNav />
            {children}
        </>
    )
}


export default Layout