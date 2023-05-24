// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitErrorMsg: false, errorMsg: ''}

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitErrorMsg, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-logo"
          />
          <div className="input-container">
            <label className="label-element" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              className="input-element"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label className="label-element" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-element"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
