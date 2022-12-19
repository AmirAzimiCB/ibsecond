import Navbar from "../Navigation/Navbar"

const Layout = ({children,isBlack}) => {
    return (
        <>
            <Navbar isBlack={isBlack}/>
            {children}
        </>
    )
}


export default Layout