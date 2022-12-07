import Footer from "./components/Footer";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="jarak" style={{height: "100px"}}></div>
            <Movie/>

            <Footer/>
        </div>
    );
}

export default App;
