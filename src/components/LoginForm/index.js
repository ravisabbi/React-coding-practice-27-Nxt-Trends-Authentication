// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  submitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)

    if (response.ok) {
      const {history} = this.props

      this.setState({errorMsg: ''})

      history.replace('/')
    } else {
      const data = await response.json()

      this.setState({errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderingForm = () => {
    const {username, password, errorMsg} = this.state

    return (
      <form className="form" onSubmit={this.submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="form-lg-logo"
        />
        <div className="field-container">
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            value={username}
            id="username"
            className="input-element"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="field-container">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            value={password}
            id="password"
            className="input-element"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <p className="error-msg">{errorMsg}</p>
      </form>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-sm-img"
          />
          {this.renderingForm()}
        </div>
      </div>
    )
  }
}

export default LoginForm
