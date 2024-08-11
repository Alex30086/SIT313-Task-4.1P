import Header from './Header/Header';
import './App.css';
import Articles from './Articles/Articles';
import Tutorial from './Tutorial/Tutorial';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';

function App() {
    return(
        <div className='App'>
            <Header />
            <Articles />
            <Tutorial />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default App;