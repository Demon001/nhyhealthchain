import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import registerServiceWorker from 'utils/registerServiceWorker'
import 'assets/styles/core.css'
import {
    HashRouter,
    Route
  } from 'react-router-dom';
// ReactDOM.render(<App />, document.getElementById('root'))
import Home from 'Home'
import About from 'About'
import Inbox from 'Inbox'

// const About = () => (
//     <div>
//       <h3>About</h3>
//     </div>
//   )
   
// const Home = () => (
//     <div>
//       <h3>Home</h3>
//     </div>
// )
   
// const Message = ({ match }) => (
//     <div>
//       <h3>new messages</h3>
//       <h3>{match.params.id}</h3>
//     </div>
// )
   
// const Inbox = ({ match }) => (
//     <div>
//       <h2>Topics</h2>
//       <Route path={`${match.url}/messages/:id`} component={Message}/>
   
//     </div>
// )

ReactDOM.render(
    (<HashRouter>
      <App>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
      </App>
    </HashRouter>),
    document.getElementById('root')
  );

registerServiceWorker()
