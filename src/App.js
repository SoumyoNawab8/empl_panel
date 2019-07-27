import React, { Component } from 'react'
import { connect } from 'react-redux';
import { doLogin } from './actions/doLogin';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    }
  }

  componentWillMount(){
    document.title="Login | Appiness Employlist";
  }

  render() {
    return (
      <div className="mid-class">
      <div className="art-right-w3ls">
        <h2>Sign In</h2>
        <form action="#" method="post">
          <div className="main">
            <div className="form-left-to-w3l">
              <input type="text" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}} name="name" placeholder="Username" required />
            </div>
            <div className="form-left-to-w3l ">
              <input
                type="password"
                name="password"
                onChange={(e)=>{this.setState({password:e.target.value})}}
                placeholder="Password"
                value={this.state.password}
                required
              />
              <div className="clear" />
            </div>
          </div>
          <div className="left-side-forget">
            <input type="checkbox" className="checked" />
            <span className="remenber-me">Remember me </span>
          </div><br/>
          <span style={{color:'red'}}>{this.props.state.msg}</span>
          <div className="clear" />
          <div className="btnn">
            <button onClick={(e)=>{e.preventDefault();this.props.userLogin({username:this.state.username,password:this.state.password},this.props.history)}} type="submit">Sign In</button>
          </div>
        </form>
       

      </div>
      <div className="art-left-w3ls">
        <h1 className="header-w3ls">Appiness Employment Panel</h1>
      </div>
    </div>
    
    )
  }
}


const mapStateToProps=(state)=>{
  state=state.usersReducers;
  if(state.logged){
    state.routes.push('/dashboard');
  }
  return {state:state}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    userLogin:(creds,routes)=>{dispatch(doLogin(creds,routes))}
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));