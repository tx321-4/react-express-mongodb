import React from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux';
import {addGUN, removeGUN, addGunAsync} from './index.redux';
import {Button, List} from 'antd-mobile';
import './App.css';


class App extends React.Component{
  render() {
    // console.log(this.props)
    // const store = this.props.store;
    // const num = store.getState();

    let boss = '李云龙';
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <h3>现在有机枪{this.props.num}把</h3>
        <button onClick={this.props.addGUN}>申请武器</button>
        <button onClick={this.props.removeGUN}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
        <FirstYin leader="张大彪"></FirstYin>
        <Squadron leader="孙德盛"></Squadron>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    num: state
  }
}



const actionCreators = {addGUN, removeGUN, addGunAsync};
App = connect(mapStateToProps, actionCreators)(App)


export default App;

function Squadron(props) {
  return <h2>骑兵连连长{props.leader},冲啊~！</h2>
}

class FirstYin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['胡子','柱子','王根生']
    }
  }
  componentWillMount() {
    console.log('组件马上就要加载了')
  }
  componentDidMount() {
    console.log('组件加载完成了')
  }
  addSolder = () => {
    console.log('hello add solder');
    this.setState({
      solders: [...this.state.solders, '新兵蛋子编号：'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载');
    return (
      <div>
        <h2>一营营长,{this.props.leader}</h2>
        <button type="primary" onClick={this.addSolder}>新兵入伍</button>

        <List renderHeader={() => '士兵列表'} className="my-list">
          {this.state.solders.map(solder=>{
            return <li key={solder}>{solder}</li>
          })}
        </List>
      </div>
    )
  }
}



