import React from 'react';
import PropTypes from 'prop-type';
//import {Link} from 'react-router';
import {connect} from 'react-redux';
import  {CourseAction} from "./Action/CourseAction";
import { bindActionCreators } from 'redux';

class Course extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            course:{title:""}
        };
        this.onTittleChange=this.onTittleChange.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }
   
    onTittleChange(event){
        const cs=this.state.course;
        cs.title=event.target.value;
        this.setState({course: cs})
    }
    onClickSave(){
        this.props.dispatch(CourseAction.createCourse(this.state.course));
      
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }
    
    render(){
        return (
        <div>
            <h1>Courses</h1>
            
             {this.props.courses.map(this.courseRow)}
            <h2>Add Course</h2>
            
            <input type="text"
                onChange={this.onTittleChange}
                value={this.state.course.title}/>
            <input type="Submit"
                value="Save"
                onClick={this.onClickSave}/>
                

          
        </div>
        );
    }

  
}
Course.propTypes={
    dispatch:PropTypes.func,
    courses:PropTypes.array
};
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators({
        ...CourseAction
    },dispatch)};
};


function mapStateToProps(state,ownProps){
    return {courses:state.CourseReducer};
}
export default connect(mapStateToProps)(Course);