// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    const {isSubscribed} = this.state

    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="content">Thank you! Happy Learning</p>

        {isSubscribed ? (
          <button className="button" type="button" onClick={this.subscribe}>
            Subscribed
          </button>
        ) : (
          <button className="button" type="button" onClick={this.subscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
