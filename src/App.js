import View from './components/viewDays/viewtransactions';
import Purchase from './components/buy'
import Navbar from './componets/Navbar'
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div ClassName="App">
      <Navbar/>
      <Home/>
      <Purchase/>
      <View/>
      <Footer/>

    </div>
  )
}


export default App;
