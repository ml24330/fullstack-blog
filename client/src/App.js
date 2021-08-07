import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SponsorsPage from './pages/SponsorsPage'
import PartnersPage from './pages/PartnersPage'
import AuthorsPage from './pages/AuthorsPage'
import Author from './pages/Author'
import PrizesPage from './pages/PrizesPage'
import CategoryPage from './pages/CategoryPage'
import SubmissionsPage from './pages/SubmissionsPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'
import Post from './pages/Post'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/404" exact component={NotFoundPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/sponsors" exact component={SponsorsPage} />
          <Route path="/partners" exact component={PartnersPage} />
          <Route path="/authors" exact component={AuthorsPage} />
          <Route path="/author/:name" exact component={Author} />
          <Route path="/prizewinners" exact component={PrizesPage} />
          <Route path="/category/:cat" exact component={CategoryPage} />
          <Route path="/submissions" exact component={SubmissionsPage} />
          <Route path="/privacy" exact component={PrivacyPage} />
          <Route path="/:year/:month/:title" exact component={Post} />
          <Route path="/">
            <Redirect
              to={`/404?from=${window.location.href}`}
            />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
