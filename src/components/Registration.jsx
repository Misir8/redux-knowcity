import React from 'react';

export default class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <h3>Sign Up</h3>
        <form>

          <div>
            <input
              type="text"
              name="login"
              autoComplete="off"
              placeholder="E-mail"
              spellCheck={false}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              name="password"
              placeholder="Repeat Password"
            />
          </div>

          <div>
            <button>Sign Up</button>
          </div>

        </form>
      </div>
    )
  }
}