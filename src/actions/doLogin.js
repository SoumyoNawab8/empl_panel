import dataJSON from '../dataJSON.json';

export const doLogin=(userCreds,routes)=>{
    let defaultcreds=dataJSON.login;
if(userCreds.username===defaultcreds.username){
    if(userCreds.password===defaultcreds.password){
        return(dispatch)=>{
            dispatch({
                type:'login',
                payload:{logged:true},
                routes
            })
        }
    }
    else{
        return(dispatch)=>{
            dispatch({
                type:'loginERR',
                payload:{msg:'Invalid Password'}
            })
        }
    }
}
else{
    return(dispatch)=>{
        dispatch({
            type:'loginERR',
            payload:{msg:'Invalid Email'}
        })
    }
}

}