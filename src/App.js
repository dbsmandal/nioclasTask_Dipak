import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing/Landing';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
