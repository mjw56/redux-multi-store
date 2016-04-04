import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_CLICK', store: this.props.store })}>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(App)