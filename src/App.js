
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import './App.css';
import jsonServerProvider from 'ra-data-json-server'
import { UserCreate, UserEdit, UserList } from './users';
import authProvider from './authProvider';
import { PostList } from './posts';

// import Dashboard from 'react-admin'    - хз - 
// чтото на раннем этапе нужно было до масштабирования

const dataProvider =
  jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => <Admin dataProvider={dataProvider} authProvider={authProvider} dataProvider={dataProvider}>

  <Resource name="posts" list={PostList} />
  <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} />
</Admin>



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Второй вариант...
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
