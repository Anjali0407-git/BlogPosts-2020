import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import ViewPost from './components/posts/ViewPost';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts/add' component={AddPost} />
          <Route exact path='/posts/edit/:id' component={EditPost} />
          <Route exact path='/posts/:id' component={ViewPost} />
          <Route component={NotFound} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
