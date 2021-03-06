import React from 'react';
import {Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from './Auth.redux'

function Yiying() {
  return <h2>一营1</h2>
}

function Erying(){
  return <h2>二营2</h2>
}

function Qibinglian() {
  return <h2>骑兵连3</h2>
}

class Dashboard extends React.Component{
  render() {
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>一营</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/dashboard/erying'>二营</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/dashboard/qibinglian'>骑兵连</Link>
          </li>
        </ul>
        <Route path="/dashboard/" exact component={Yiying}></Route>
        <Route path="/dashboard/erying" component={Erying}></Route>
        <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
      </div>
    )
    
    return this.props.isAuth ? app : redirectToLogin;
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.auth
  }
}
const actionCreators = {logout};
 Dashboard = connect(mapStateToProps, actionCreators)(Dashboard);

export default Dashboard;