
import './App.css';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Home from './Components/Home';
import More from './Components/More';
import Welcome from './Components/Welcome';

const App = () => {
  return ( 
    <div className="hotel">
      <Header />
      <Home />
      <Welcome />
      <Gallery />
      <More />
      <Footer/>
    </div>
   );
}
 
export default App;
