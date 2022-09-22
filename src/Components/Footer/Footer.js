import React from 'react';

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    height: '80px',
    backgroundColor: 'lightgray'
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <small>© 2022 || Anika Jumana Khanam</small>
        </div>
    );
};

export default Footer;