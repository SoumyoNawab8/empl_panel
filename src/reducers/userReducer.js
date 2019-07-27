
export const usersReducers=(state={},action)=>{
    
    switch(action.type){
        case 'login':

            localStorage.setItem('userLogs',JSON.stringify(action.payload));
            return Object.assign({},state,action.payload,{msg:"",routes:action.routes});
        case 'loginERR':
                return Object.assign({},state,action.payload);
        case 'logoff':
                localStorage.removeItem('userLogs');
                return Object.assign({},state,{routes:action.routes,logged:false});
        default:
            return state;
    }
}