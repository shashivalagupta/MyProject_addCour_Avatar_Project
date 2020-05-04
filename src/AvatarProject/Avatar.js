import React from "react";
import './Avatarstyle.css';
// import 'tachyons';
import Avatarstyle from './Avatarlist';
import Avatarlist from "./Avatarlist";

  class Avatar extends React.Component{
    constructor(props){
      super(props);
      this.state={name:"Welcome to Avatar World"}
    }
    Changeheader(){
      this.setState({
        name:"Channel subscribed"
      });
    }
   
    render(){
      const Avatarlistarray=[
        {
          id:1,
          name:"Shashivala",
          work:"Web Developer"
        },
        {
          id:2,
          name:"Joe",
          work:"Database Designer",
        },
        {
          id:3,
          name:"Jon",
          work:"Fullstack Developer"
        },
        {
          id:4,
          name:"Radha",
          work:"Automation Testing"
        }
      ]
      const Arrayavatarcard=Avatarlistarray.map((Avatarcard,i)=>{
        return <Avatarlist id={Avatarlistarray[i].name}
                           name={Avatarlistarray[i].name}
                           work={Avatarlistarray[i].work}/>
      } )
      return(
          <div className="Mainpage">
           <h1 >{this.state.name}</h1>
           {Arrayavatarcard}  
            <button onClick={()=>this.Changeheader()}>Subscribe</button>
          </div>
  );
    }
  }
export default Avatar;