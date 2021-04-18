import React from 'react';
import Nav from '../components/Nav/Nav';


const WelcomeLayout = ({ children }) => {
    return (
        <div>
                {children}
        </div>
    )
};

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Nav/>
                {children}
        </div>
    )
};

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Nav/>
                {children}
        </div>
    )
};

const CartLayout = ({ children }) => {
    return (
        <div>
            <Nav/>
                {children}
        </div>
    )
};


export {WelcomeLayout, AuthLayout, HomeLayout, CartLayout };