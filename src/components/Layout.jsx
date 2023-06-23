import React from 'react';

const Wrapper = {
    margin: '0 auto',
    padding: '20px 5px 100px'
};

function Layout({ children }) {
    return <div style={Wrapper}>{children}</div>;
}

export default Layout;
