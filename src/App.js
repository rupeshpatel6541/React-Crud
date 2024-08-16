import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import './App.css';

function App() {
  return (
    <div className="App">
    
          <h1>React CRUD using API and Mysql Database</h1>
        <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to = "/">List User</Link>
            </li>
            <li>
               <Link to = "User/Create">Create User</Link>
            </li>
          </ul>
        </nav>
                      
            <Routes>
              <Route index element = {<ListUser/>}/>
              <Route path="User/Create" element = {<CreateUser/>}/>
              <Route path ="User/:id/edit" element ={<EditUser/>}/>
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
   