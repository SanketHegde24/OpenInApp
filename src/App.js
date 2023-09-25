import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  
  return (
    <div className='background-layout'>
      <div className="App">
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
