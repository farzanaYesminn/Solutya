import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import OurCompany from './pages/OurCompany';
import OurProject from './pages/OurProject';
import OurService from './pages/OurService';
import OurTeam from './pages/OurTeam';
import OurWork from './pages/OurWork';
import VideoFeedback from './pages/VideoFeedback';
import WeWork from './pages/WeWork';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductDashboard from './components/ProductDashboard';

function App() {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Hero} />
                    <Route path="/our-service" component={OurService} />
                    <Route path="/our-company" component={OurCompany} />
                    <Route path="/our-project" component={OurProject} />
                    <Route path="/we-work" component={WeWork} />
                    <Route path="/our-team" component={OurTeam} />
                    <Route path="/our-work" component={OurWork} />
                    <Route path="/video-feedback" component={VideoFeedback} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/products" component={ProductDashboard} />
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default App;