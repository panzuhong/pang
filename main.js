import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  render () {
    return <div>
      <h1>My component</h1>
      <span>{this.state.a.toString()}</span>
      {this.children}
    </div>
  }
}

render(
  <MyComponent id="a" class="c">
    <div>aaa</div>
    <div>bb</div>
    <div>cc</div>
  </MyComponent>
, document.body)