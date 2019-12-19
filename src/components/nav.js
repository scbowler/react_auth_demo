import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn, userSignOut } from '../actions';

class Nav extends React.Component {
    
    AuthLinks = (props) => {
        const { auth, userSignOut } = this.props;

        if(auth) {
            return (
                <>
                    <li>
                        <Link to="/secret-data">Secret Data</Link>
                    </li>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <button onClick={userSignOut} className="btn yellow black-text waves-light waves-effect">Sign Out</button>
                    </li>
                </>
            );
        }

        return (
            <>
                <li key="sign-in">
                    <Link to="/sign-in" >Sign In</Link>
                </li>
                <li key="sign-up">
                    <Link to="/sign-up" >Sign Up</Link>
                </li>
            </>
        );
    }

    render() {
        const navStyles = {
            padding: '0 8px'
        }

        console.log('AUTH:', this.props.auth);

        return (
            <nav className="blue darken-2" style={navStyles}>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Auth App</Link>

                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <this.AuthLinks />
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    userSignIn: userSignIn,
    userSignOut: userSignOut
})(Nav);
