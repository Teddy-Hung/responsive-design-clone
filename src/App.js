import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }

  render(){
    return (
      <div className='App'>
        <nav className='App-header'>
          <section className='Header-nav-bar'>
            <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='logo'></img>
            <section className='Desktop-menu'>
              <span id='services'>SERVICES</span>
              <span id='portfolio'>PORTFOLIO</span>
              <span id='about'>ABOUT</span>
              <span id='team'>TEAM</span>
              <span id='contact'>CONTACT</span>
            </section>
            <button className='Mobile-menu-button' onClick={this.toggleDropdown}>MENU</button>
            {this.state.dropdownView
              ? (
                <nav className='Mobile-menu'>
                  <span id='services'>SERVICES</span>
                  <span id='portfolio'>PORTFOLIO</span>
                  <span id='about'>ABOUT</span>
                  <span id='team'>TEAM</span>
                  <span id='contact'>CONTACT</span>
                </nav>
              )
              : null}
          </section>
          <main class="Header-main">
            <span id='text1'>Welcome To Our Studio!</span>
            <span id='text2'>IT'S NICE TO MEET YOU</span>
            <button id='info-button'>TELL ME MORE</button>
          </main>
        </nav>
      </div>
    )
  }

}

export default App;
