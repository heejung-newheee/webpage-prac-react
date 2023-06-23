import React, { useState } from 'react';
import '../App.css';
import { styled } from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 200px;
    border: solid 3px #ddd;
    overflow: hidden;
    margin-top: 50px;
`;
const Flex = styled.div`
    display: flex;
    gap: 20px;
`;
const SelectBtn = styled.button`
    height: 40px;
    width: 300px;
    padding: 0 16px;
    line-height: 40px;
    text-align: left;
    border: 1px solid rgba(224, 226, 231, 0.75);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
`;
const Dropdown = styled.ul`
    position: absolute;
    z-index: 2;
    left: ${(props) => props.leftLocation || '0'};
    width: 300px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 0;
    padding: 0;
    border-radius: 6px;
    transition: border-color 200ms ease-in, padding 200ms ease-in, max-height 200ms ease-in, box-shadow 200ms ease-in;
`;
const DropOption = styled.button`
    width: 100%;
    height: 40px;
    padding: 0 16px;
    line-height: 40px;
    text-align: left;
    &:hover {
        background-color: #f8f9fa;
    }
`;
function Select() {
    const [slide, setSlide] = useState(false);
    const slideToggleOne = () => {
        setSlide((slide) => !slide);
    };
    const [slideTwo, setSlideTwo] = useState(false);
    const slideToggleTwo = () => {
        setSlideTwo((slideTwo) => !slideTwo);
    };
    const [buttonText, setbuttonText] = useState('리액트');
    const changeText = (e) => {
        setbuttonText(e.target.textContent);
    };
    const [buttonTextTwo, setbuttonTextTwo] = useState('리액트');
    const changeTextTwo = (e) => {
        setbuttonTextTwo(e.target.textContent);
    };

    const optionList = ['리액트', '자바', '스프링', '리액트네이티브'];
    const getLabelName = (label) => {
        switch (label) {
            case '리액트':
                return '리액트';
            case '자바':
                return '자바';
            case '스프링':
                return '스프링';
            case '리액트네이티브':
                return '리액트네이티브';
            default:
                return '리액트';
        }
    };

    return (
        <Box>
            <h1>Select</h1>
            <Flex>
                <div>
                    <SelectBtn className="selDefault" onClick={slideToggleOne} onBlur={() => setSlide(false)}>
                        {buttonText}
                    </SelectBtn>
                    <Dropdown className={slide ? 'slideShow' : 'slideHide'} leftLocation={'8px'}>
                        {optionList.map((name) => {
                            return (
                                <li>
                                    <DropOption onMouseDown={changeText} name={name}>
                                        {getLabelName(name)}
                                    </DropOption>
                                </li>
                            );
                        })}
                    </Dropdown>
                </div>
                <div style={{ position: 'relative' }}>
                    <SelectBtn className="selDefault" onClick={slideToggleTwo} onBlur={() => setSlideTwo(false)}>
                        {buttonTextTwo}
                    </SelectBtn>
                    <Dropdown className={slideTwo ? 'slideShow' : 'slideHide'}>
                        {optionList.map((name) => {
                            return (
                                <li>
                                    <DropOption onMouseDown={changeTextTwo} name={name}>
                                        {getLabelName(name)}
                                    </DropOption>
                                </li>
                            );
                        })}
                    </Dropdown>
                </div>
            </Flex>
        </Box>
    );
}
<div id="portal-target"></div>;
export default Select;
