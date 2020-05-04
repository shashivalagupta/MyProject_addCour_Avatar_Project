
const initialState={
    courseTitle :{
        title:""
    }
}
export default function CourseReducer(state=[],action){
    switch(action.type){
        case 'CREATE_COURSE':
            // return [...state,
            // Object.assign({},state,action.course)];
            // let courseTitle=action.course;
            return [...state,Object.assign({},action.course)]
            // return Object.assign([],state,{courseTitle })
        case 'RESET_COURSE':
            return ""
               
        default:
            return state;
    }
}