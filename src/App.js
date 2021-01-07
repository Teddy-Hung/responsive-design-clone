import react, {Component} from 'react'
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
        <head>
          <meta charset="UTF-8"></meta>
          <meta name="description" content="responsive-design-clone"></meta>
          <meta name="keywords" content="responsive-design-clone, devmtn"></meta>
          <meta name='Author' content='Teddy Hung WR8'></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <body>
          <nav className='App-header'>
            <section className='Header-nav-bar'>
              <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='logo'></img>
              <section className='Desktop-menu'>
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTACT</span>
              </section>
            </section>
            <main class="Header-main">
              <span>Welcome To Our Studio!</span>
              <span>IT'S NICE TO MEET YOU</span>
              <button>TELL ME MORE</button>
            </main>
          </nav>

        </body>

      </div>
    )
  }

}

export default App;
