import React, {Component} from 'react'
import {
  Prompt
} from 'react-router-dom'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {isBlocking: false};
  }
  isBlocked() {
    return this.state.isBlocking
  }
  render() {
    const { isBlocking } = this.state
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
          window.isFormDirty = false;
        }}
      >
        <Prompt
          when={this.isBlocked()}
          message={location => {
            console.log('location', location)
            return `You have unsaved changes. Are you sure you want to go to ${location.pathname}?`
          }}
        />

        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              window.isFormDirty = true;
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}

export default Form
