import Home from "./home/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Product from './product/Product'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                   <Route path="/" element={<Home/>}></Route>
                   <Route path="/product" element={<Product/>}></Route>
                </Routes>
                <Footer />

            </BrowserRouter>
        </div>
    );
}

export default App;

// const [hello, setHello] = useState('');
// useEffect(() => {
//     axios.get('/api/test')
//         .then((res) => {
//             setHello(res.data);
//         })
// }, []);