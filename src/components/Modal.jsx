import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { StButton } from './Button';
import { ButtonWrap } from './Button';
import '../App.css';

const BgModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(199, 199, 199, 0.733);
    z-index: 999;
`;
const ModalBox = styled.div`
    width: 30%;
    height: 30%;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    p {
        width: 100%;
    }
    div {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: flex-end;
        justify-content: flex-end;
    }
`;
const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ddd;
`;
function Modal() {
    // const modalOne = document.querySelector('.modal-one');

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const toggleModal = () => {
        setIsOpen((isOpen) => !isOpen);
        console.log(isOpen);
    };
    const toggleModalTwo = () => {
        setIsOpenTwo((isOpenTwo) => !isOpenTwo);
        console.log(isOpenTwo);
    };
    const closeModal = () => {
        setIsOpenTwo((isOpenTwo) => !isOpenTwo);
    };
    return (
        <div>
            <h1>Modal</h1>
            <ButtonWrap>
                <StButton bgColor={'#00e6bf'} onClick={toggleModal}>
                    Open Modal
                </StButton>
                <StButton bgColor={'#ffb7a6'} fontColor={'#c72205'} onClick={toggleModalTwo}>
                    Open Modal
                </StButton>
            </ButtonWrap>

            <BgModal className={isOpen ? 'show' : 'hide'}>
                <ModalBox>
                    <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                    <div>
                        <StButton bgColor={'#ffb7a6'} fontColor={'#c72205'} onClick={toggleModal}>
                            닫기
                        </StButton>
                        <StButton bgColor={'#00e6bf'}>확인</StButton>
                    </div>
                </ModalBox>
            </BgModal>

            <BgModal className={isOpenTwo ? 'show' : 'hide'} onClick={toggleModalTwo}>
                <ModalBox>
                    <CloseBtn onClick={toggleModalTwo}>X</CloseBtn>
                    <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                </ModalBox>
            </BgModal>
        </div>
    );
}

export default Modal;
