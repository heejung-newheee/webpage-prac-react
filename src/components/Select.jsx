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
    color: rgb(119 119 119);
    text-align: left;
    border: 1px solid rgba(224, 226, 231, 0.75);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    &selected {
        color: #3f4150;
    }
    &:active {
        border-color: rgba(224, 226, 231, 1);
    }
`;
const Dropdown = styled.ul`
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
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
        const textValue = e.target.textContent;
        setbuttonText(textValue);
        setSlide((slideTwo) => !slideTwo);
    };
    return (
        <Box>
            <h1>Select</h1>
            <Flex>
                <div style={{ position: 'relative' }}>
                    <SelectBtn onClick={slideToggleOne} className="selDefault">
                        {buttonText}
                    </SelectBtn>
                    <Dropdown className={slide ? 'slideShow' : 'slideHide'}>
                        <li>
                            <DropOption onClick={changeText}>리액트</DropOption>
                        </li>
                        <li>
                            <DropOption onClick={changeText}>자바</DropOption>
                        </li>
                        <li>
                            <DropOption onClick={changeText}>스프링</DropOption>
                        </li>
                        <li>
                            <DropOption onClick={changeText}>리액트네이티브</DropOption>
                        </li>
                    </Dropdown>
                </div>
                <div style={{ position: 'relative' }}>
                    <SelectBtn onClick={slideToggleTwo} className="selDefault">
                        리액트
                    </SelectBtn>
                    <Dropdown className={slideTwo ? 'slideShow' : 'slideHide'}>
                        <li>
                            <DropOption>리액트</DropOption>
                        </li>
                        <li>
                            <DropOption>자바</DropOption>
                        </li>
                        <li>
                            <DropOption>스프링</DropOption>
                        </li>
                        <li>
                            <DropOption>리액트네이티브</DropOption>
                        </li>
                    </Dropdown>
                </div>
            </Flex>
        </Box>
    );
}
<div id="portal-target"></div>;
export default Select;
