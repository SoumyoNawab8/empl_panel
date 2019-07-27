import dataJSON from '../dataJSON.json';

export const dashboardReducer=(state={},action)=>{
    
    switch(action.type){
        case 'loadEmpl':
            let empls=dataJSON.dashboard.user;
            console.log(dataJSON.dashboard)
            return Object.assign({},state,{employees:empls});
        default:
            return state;
    }
}