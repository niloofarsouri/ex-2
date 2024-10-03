import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../footer";
import Header from "../header";




function Layout({ children }) {



    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


export default Layout;