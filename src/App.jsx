import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import OnButton from './components/OnButton';
import Sidebar from './components/Sidebar';
import Api from './components/Api';
import Api1 from './components/Api1';
import ApiUser from './components/ApiUser';
import State from './components/State';
import logo from './images/img.jpg';
import Todos from './components/Todos';
import Main1 from './components/Main1';
import ThemeContextProvider from './context/ThemeContext';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';


function App() {
  return (
    <>
    <ThemeContextProvider>
      <BookContextProvider >
      <BookList />
      </BookContextProvider>
    </ThemeContextProvider>
    {/* <Main1 /> */}
    {/* <Todos />
    <Api />
    <Api1 />
    <ApiUser /> */}

    {/* <State /> */}
   {/* <Header />
  <Sidebar /> 
  <OnButton /> */}
  {/* <Sidebar color= 'red'/>
  <Sidebar color= 'blue'/>
  <Sidebar color= 'yellow'/> */}

  {/* <div>
    <h2>My first app</h2> 
    <div><img src={logo} alt='' /></div>
  <p>sec</p>
  </div> */}
</>
);
}


export default App;
