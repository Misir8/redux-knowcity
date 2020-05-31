import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Complex State</h1>

        <div className="forms">

          <div className="auth">
            <h3>Sign In</h3>
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
              </div>
              
              <div>
                <button>Sign In</button>
              </div>
              
            </form>
            
          </div>

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

        </div>
      
      </div>
    )
  }
}