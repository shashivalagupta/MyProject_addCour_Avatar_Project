import React from "react";
import Menu from "./Menu";
import About from "./About";
import Home from "./Home";
import Course from "./Course";
// import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
 export default class App extends React.Component 
  {
      constructor(props){
          super(props);
      this.state = {  name:"Shashivala"  };
      }
    render() 
    {
    return (
       <BrowserRouter>
         <div>
             <h1>Hello {this.state.name}</h1>
             <Menu/>
              {/* <Home/>
            <About/>
             <Course/> */}

               <Switch> 
                 <Route path="/" exact component={Home} /> 
                <Route path="/About" component={About}/>
                {/* <Provider> */}
                  <Route path="/Course" component={Course}/>
                {/* </Provider> */}
                  
              </Switch>  
         </div> 
         </BrowserRouter>
    );

    }
}
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <div>
//     //   <h1>Hello World</h1>
//     // </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
