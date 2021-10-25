import React, { Component } from 'react';
// import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import InstructorBio from './InstructorBioComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './ContactComponent';
// import About from './AboutComponent';

const mapStateToProps = state => {
    return {
        instructors: state.instructors,
        homecarousel: state.homeCarousel
    }
}

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home
                    homeCarousel={this.props.homecarousel}
                />
            );
        }

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/instructorbio' render={() => <InstructorBio instructors={this.props.instructors} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));