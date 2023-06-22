import React from 'react';
import { styled } from 'styled-components';

export const ButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`;
export const StButton = styled.button`
    align-items: center;
    background-color: ${(props) => props.bgColor || '#fff'};
    border: ${(props) => props.stBorder || 'none'};
    color: ${(props) => props.fontColor || 'black'};
    border-radius: 8px;
    padding: 12px 0;

    ${({ btnSize }) => {
        let btnHeight;
        let btnWidth;
        switch (btnSize) {
            case 'large':
                btnWidth = '200px';
                btnHeight = '50px';
                break;

            case 'small':
                btnWidth = '100px';
                btnHeight = '40px';
                break;

            default:
                btnWidth = '130px';
                btnHeight = '45px';
                break;
        }
        return `width : ${btnWidth};
                height : ${btnHeight}`;
    }};
`;

function Button({ bgColor, btnSize }) {
    const btnAlert = () => {
        alert('버튼을 만들어보세요');
    };
    const btnConfirm = () => {
        prompt('어렵나요?');
    };
    return (
        <div>
            <h1>Button</h1>
            <ButtonWrap>
                <StButton stBorder={'solid 3px #00e6bf'} btnSize="large" onClick={btnAlert}>
                    Large Primary Button
                </StButton>
                <StButton bgColor={'#00e6bf'}>Medium</StButton>
                <StButton bgColor={'#00e6bf'} btnSize="small">
                    Small
                </StButton>
            </ButtonWrap>
            <ButtonWrap>
                <StButton stBorder={'solid 3px #ffb7a6'} fontColor={'#c72205'} btnSize="large" onClick={btnConfirm}>
                    Large Negative Button
                </StButton>
                <StButton bgColor={'#ffb7a6'} fontColor={'#c72205'}>
                    Medium
                </StButton>
                <StButton bgColor={'#ffb7a6'} fontColor={'#c72205'} btnSize="small">
                    Small
                </StButton>
            </ButtonWrap>
        </div>
    );
}

export default Button;
