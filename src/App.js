import { Container } from 'react-bootstrap';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Box from './components/Box';
import Avatar from './components/Avatar';
import { items } from './components/Data';
import Book from './components/Book';
import Vidu2 from './components/Vidu2';
import Vidu3 from './components/ViDu3';

function App() {
  return (
    <>
      <Container>
        {/* <Book />
        <Counter />
        <Box mau="red" rong="200px" cao="200px" />
        <Box />
        <Box mau="green" />
        <Hello question="What is your name?" />
        <Hello who='Tuan Anh' age='20' question="What bro" />
        <hr />
        {
          items.map((a, key) => (
            <Avatar key={key}
              name={a.name}
              gender={a.gender}
              image={a.image}
            />
          ))
        } */}
        <Vidu3 /> 
      </Container>
    </>
  );
}
export default App;



// import logo from './logo.svg';
// import './App.css';
// import List from './components/List';

// function App() {
//   return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//         <p>
//       Edit <code>src/App.js</code> and save to reload.
//         </p>
//        <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>


//     <>
//     <List/>
//     <hr/>
//     <img src = "avt0.png" width = {400} height ={200}alt = "Background"/>
//     <h1>Hello World !!</h1>
//     <table bolder = {1}>
//       <tr>
//         <th>STT</th>
//         <th>MSV</th>
//         <th>Ho Va Ten</th>
//         <th>Diem</th>      </tr>
//       <tr>
//         <td>1</td>
//         <td>PH12345</td>
//         <td>Nguyen Van A</td>
//         <td>9.0</td>
//       </tr>
//       <tr> 
//         <td>2</td>
//         <td>PH12346</td>
//         <td>Nguyen Van B</td>
//         <td>8.0</td>  
//         </tr>

//     </table>
//     </>
//   );
// }

//  export default App;

// import Bai2 from './components/Bai2';
// import Gallery from './components/Gallery';
// import Header from './components/Header';
// import { Container } from 'react-bootstrap';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
// import Box from './components/Box';
// import Avatar from './components/Avatar';
// import { items } from './components/Data';
// import Movie from './components/Movie';
// import Book from './components/Book';
// import VD1 from "./components/VD1";
// import VD2 from "./VD2";

// function App() {
//   return (
//     <>
//       <Container>
//         <Book />
//         <Counter />
//         <Box mau="red" rong="200px" cao="200px" />
//         <Box />
//         <Box mau="green" />
//         <Hello question="What is your name?" />
//         <Hello who="Tuan Anh" age="20" question="What bro" />
//         <hr />
//         {
//           items.map((a, key) => (
//             <Avatar key={key}
//               name={a.name}
//               gender={a.gender}
//               image={a.image}
//             />
//           ))
//         }
//       </Container>
//       <Gallery />
//       <VD1 />
//       <hr />
//       <Header />
//       <Bai2 />
//       <Movie />
//       <Book />
//       <VD2 />
//     </>
//   );
// }
// export default App;