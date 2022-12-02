
import './App.css';
import Card from './Card';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}


export default App;
