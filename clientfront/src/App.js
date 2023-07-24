import Alltasks from './components/Alltasks';
import Addtask from './components/Task_creation';
import Edittask from './components/Edittask';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Alltasks /> } />
        <Route path="/add" element={<Addtask />} />
        <Route path="/edit/:id" element={<Edittask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;