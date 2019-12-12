import types from './types';

export const userSignIn = () => {
    return {
        type: types.SIGN_IN,
        name: 'Jim Bob'
    };
};

export const userSingOut = () => {
    return {
        type: types.SIGN_OUT
    };
};

export const userSignUp = () => {
    return {
        type: types.SIGN_UP,
        name: 'Jim Bob'
    };
};
