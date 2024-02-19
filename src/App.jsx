
import './styles/main.scss';
import Navbar from './Navbar';
import Hero from './Hero';
import Container from './Container';
import CardSlider from './CardSlider';
import Portfolio from './Portfolio';
import { Route, Routes} from 'react-router-dom'





function App() {
  return (
   
      <Container>
         <Navbar />
          <Routes>
            <Route path='/' element={<Hero />}></Route>
            <Route path='/skills' element={<CardSlider />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
          </Routes>
      </Container>
   
   
  );
}

export default App;
