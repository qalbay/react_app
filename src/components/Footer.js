import React from 'react';

let footerStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
}

const Footer = (props) => {
    return (
        <div className="container">
            <footer className="bg-dark text-center text-white py-2" style={footerStyle}>Copyright 2021</footer>
        </div>
    )
}

export default Footer;