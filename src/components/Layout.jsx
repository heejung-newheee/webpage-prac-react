import React from 'react';

const Wrapper = {
    maxWidth: '1200px',
    minWidth: '800px',
    margin: '0 auto',
    padding: '5px'
};

function Layout({ children }) {
    return <div style={Wrapper}>{children}</div>;
}

export default Layout;
