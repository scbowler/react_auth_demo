import axios from 'axios';
import types from './types';

const BASE_URL = 'http://api.reactprototypes.com';

// Test Email
// m31019_demo_user@example.com

export const getMovieQuote = () => async dispatch => {
    try {
        const token = localStorage.getItem('auth-token');

        if(!token){
            throw new Error('Missing auth token');
        }

        const { data } = await axios.get(BASE_URL, {
            headers: {
                authorization: token
            }
        });

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            quote: data.message
        });
    } catch (error) {
        console.log('Movie Quote Error:', error);
    }
}

export const userSignIn = credentials => async dispatch => {
    try {
        const { data } = await axios.post(`${BASE_URL}/signin`, credentials);

        localStorage.setItem('auth-token', data.token);

        dispatch({
            type: types.SIGN_IN
        });
    } catch (error) {
        console.log('Sign In Error:', error);
    }
}

export const userSignOut = () => {
    localStorage.removeItem('auth-token');

    return {
        type: types.SIGN_OUT
    };
};

export const userSignUp = userData => async dispatch => {
    try {
        const { data } = await axios.post(`${BASE_URL}/signup`, userData);

        localStorage.setItem('auth-token', data.token);

        dispatch({
            type: types.SIGN_UP
        });
    } catch (error) {
        console.log('Error signing up:', error);
    }
}
