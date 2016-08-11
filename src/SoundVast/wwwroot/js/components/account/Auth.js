import React from "react";
import { withRouter } from "react-router";

import Auth from "../../modules/Auth"

export class Dashboard extends React.Component {
  render() {
      const token = Auth.getToken()

      return (
        <div>
          <h1>Dashboard</h1>
          <p>You made it!</p>
          <p>{token}</p>
        </div>
      )
  }
}

export const Login = withRouter(React.createClass({
    getInitialState() {
      return {
        error: false
      }
    },

    handleSubmit(e) {
      e.preventDefault()

      const email = this.refs.email.value
      const pass = this.refs.pass.value

      Auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
          <button type="submit">login</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
      )
    }
  })
)

export class Logout extends React.Component{
  componentDidMount() {
    Auth.logout()
  }

  render() {
    return <p>You are now logged out</p>
  }
}

