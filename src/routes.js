import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import dashboard from './dashboard';
import { connect } from 'react-redux';

const ProtectedRoute 
  = ({ isAllowed, ...props }) => (
    isAllowed
    ? <Route {...props}/> 
    : <Redirect to="/"/>
  )


class Routes extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }

    componentWillMount(){
        if(localStorage.getItem('userLogs')!==null){
            if(JSON.parse(localStorage.getItem('userLogs')).logged){
                this.setState({isLoggedIn:true})
            }
        }
        else{
            if(this.props.state.logged){
                this.setState({isLoggedIn:true})
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(localStorage.getItem('userLogs')!==null){
            if(JSON.parse(localStorage.getItem('userLogs')).logged){
                this.setState({isLoggedIn:true})
            }
        }
        else{
            if(nextProps.state.logged){
                this.setState({isLoggedIn:true})
            }
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <ProtectedRoute isAllowed={this.state.isLoggedIn} exact path="/dashboard" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps=(state)=>{
    state=state.usersReducers;
   
    return {state:state}
  }

export default connect(mapStateToProps)(Routes);