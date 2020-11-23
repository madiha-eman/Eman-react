import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import logo from './images/img.jpg';


function App() {
  return (
    <>
    
  <Header />
  <Sidebar />
  {/* <Sidebar color= 'red'/>
  <Sidebar color= 'blue'/>
  <Sidebar color= 'yellow'/> */}

  <div>
    <h2>My first app</h2> 
    <div><img src={logo} alt='' /></div>
  <p>sec</p>
  </div>
</>
);
}


export default App;
