export const  CREATE_COURSE='CREATE_COURSE';
export const RESET_COURSE='RESET_COURSE';


 export const CourseAction ={
    createCourse : (course)=>{    
    return{    type:CREATE_COURSE,
        course //API Call
     } },

     resetCourse : ()=>{
         return {
             type: RESET_COURSE,
             courses:""
            
         }
     }

 } 

