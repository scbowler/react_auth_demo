import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn, userSingOut } from '../actions';

class Nav extends React.Component {
    AuthBtn = (props) => {
        const { auth, userSignIn, userSingOut } = this.props;

        if(auth) {
            return <button onClick={userSingOut} className="btn yellow black-text waves-light waves-effect">Sign Out</button>
        }

        return <button onClick={userSignIn} className="btn blue lighten-3 waves-effect waves-light">Sign In</button>
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
                        <li>
                            <Link to="/secret-data">Secret Data</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <this.AuthBtn/>
                        </li>
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
    userSingOut: userSingOut
})(Nav);
