import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import dashboard from './dashboard';

const ProtectedRoute 
  = ({ isAllowed, ...props }) => (
    isAllowed
    ? <Route {...props}/> 
    : <Redirect to="/"/>
  )


export default class Routes extends Component {
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
    }

    componentWillReceiveProps(){
        if(localStorage.getItem('userLogs')!==null){
            if(JSON.parse(localStorage.getItem('userLogs')).logged){
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
