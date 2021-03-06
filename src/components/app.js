import React from 'react';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import AboutUs from './about_us'
import Home from './home';
import Nav from './nav';
import Quote from './quote';
import SecretData from './secret_data';
import SecretList from './secret_list';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav />
        
        <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/movie-quote" component={auth(Quote)} />
            <Route path="/secret-data" component={auth(SecretData)} />
            <Route path="/secret-list" component={auth(SecretList)} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </div>
    </div>
);

export default App;
