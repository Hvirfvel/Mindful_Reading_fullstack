import Header from './components/Header';
import BooksContainer from './containers/BooksContainer';
import './App.css';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <BooksContainer/>
      <Footer/>
    </>
  );
}

export default App;
