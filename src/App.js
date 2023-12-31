
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slider from "./shared/components/Layout/Slider";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
         
                <Header />
                {/*	Body	*/}
                <div id="body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Menu />
                            </div>
                        </div>
                        <div className="row">
                        <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                            <Slider/>
                            <Routes>
                               <Route path="/" element={<Home/>}/>
                               <Route path="/Category" element={<Category/>}/>
                               <Route path="/ProductDetails" element={<ProductDetails/>}/>
                               <Route path="/Search" element={<Search/>}/>
                               <Route path="/Cart" element={<Cart/>}/>
                               <Route path="/Success" element={<Success/>}/>
                               <Route path="*" element={<NotFound/>}/>

                            </Routes>
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                {/*	End Body	*/}
                <Footer />
        
        </BrowserRouter>
    )
}
export default App;