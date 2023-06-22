import React from 'react';
import { styled } from 'styled-components';
import Layout from '../components/Layout';

const MenuBar = styled.ul`
    display: flex;
    justify-content: center;
    text-align: center;
    li {
        width: 20%;
    }
`;

function FeatHeader() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Home Logo</h1>
            <nav>
                <Layout>
                    <MenuBar>
                        <li>button</li>
                        <li>input</li>
                        <li>modal</li>
                        <li>select</li>
                    </MenuBar>
                </Layout>
            </nav>
        </div>
    );
}

export default FeatHeader;
