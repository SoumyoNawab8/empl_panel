import React, { Component } from 'react'
import {Table} from 'antd';
import './css/style1.css';
import "antd/dist/antd.css";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class dashboard extends Component {

    constructor(props){
        super(props);
        
    }

    componentWillMount(){
        this.props.getEmployees();
    }
  
    render() {
        let column=[
            {
                title:"Id",
                key:'id',
                dataIndex:'id'
            },{
                title:"Name",
                key:'name',
                dataIndex:'name'
            },{
                title:'Age',
                key:'age',
                dataIndex:'age'
            },{
                title:'Email',
                key:'email',
                dataIndex:'email'
            },{
                title:'Phone No.',
                key:'phoneNo',
                dataIndex:'phoneNo'
            }
        ]
        return (
            <div className="main-agile">
  <h1>
    Appiness <span>Employee Listing</span>
  </h1>
  <div className="w3ls-grids">
  <Table columns={column} dataSource={this.props.state.employees} />
    <div className="clear"> </div>
  </div>
  <div className="content3">
    <p>
      <a
        className="book popup-with-zoom-anim button-isi zoomIn animated"
        data-wow-delay=".5s"
        onClick={(e)=>{e.preventDefault();this.props.logout(this.props.history)}}
      >
        Log Out
      </a>
    </p>
  </div>

</div>
        )
    }
}


const mapStateToProps=(state)=>{
let userstate=state.usersReducers;
if(userstate.logged===false){
    userstate.routes.push("/");
}

    return {state:state.dashboardReducer}
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      getEmployees:()=>{dispatch({type:'loadEmpl'})},
      logout:(routes)=>{dispatch({type:'logoff',routes})}
    }
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(dashboard));