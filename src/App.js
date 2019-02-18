import React, { Component, Fragment } from 'react';
import Item from './Item'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      list: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }

  handleClick() {
    let lists = [...this.state.lists, this.state.list];
    this.setState({
      lists, list: ''
    });
  }

  handleInput(e) {
    this.setState({ list: e.target.value });
  }

  handleRemove(index) {
    let lists = [...this.state.lists];
    lists.splice(index, 1);
    this.setState({ lists });
  }


  render() {
    return (
      <Fragment>
          <header className="App-header">
            <input value={this.state.list} onChange={this.handleInput}></input>
            <button onClick={this.handleClick}>添加</button>
          </header>
        
            <ul>
              {
                this.state.lists.map(
                  (item, index) =>
                    <Item key={index} content={item} index={index} onDelete={this.handleRemove}>{item}</Item>
                  // <li key={index} onClick={this.handleRemove.bind(this, index)}>{item}</li>
                )
              }
            </ul>
      </Fragment>
    );
  }
}

export default App;

/**
 * 1. 创建项目
 *    npx create-react-app my-app
 *    cd my-app
 *    npm start
 * 2. 处理事件
 *    onClick = {this.handleClick.bind(this,id,data)}   //传递数据并且绑定this,建议在事件调用时绑定,
 *    或者在构造器中绑定 ==>this.handleClick = this.handleClick.bind(this)
 * 3. 处理数据
 *      创建数据
 *      this.state = {}
 *      修改数据
 *      this.setState({})
 */