import React, { useState } from 'react';
import { styled } from 'styled-components';
import StButton from './Button';

const Label = styled.label`
    line-height: 35px;
`;
const InputBox = styled.input`
    margin-right: 50px;
    margin-left: 3px;
    border: solid 1px #333;
    padding: 10px;
    border-radius: 5px;
`;
function Input() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const submitHandler = () => {
        alert(`name : ${name} price : ${price}`);
        setName('');
        setPrice('');
    };
    const numInput = (e) => {
        // const numCheck = /^[0-9,]/.test(price);
        // if (!numCheck && price) return;
        // if (numCheck) {
        //     const numValue = price.replaceAll(',', '');
        //     price = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // }
        setPrice(+e.target.value);
    };

    return (
        <div>
            <h1>Input</h1>
            <form onSubmit={submitHandler}>
                <Label for="">이름</Label>
                <InputBox
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <Label for="">가격</Label>
                <InputBox type="text" value={price} onChange={numInput} />
                <StButton bgColor={'#00e6bf'} btnSize={'small'}>
                    저장
                </StButton>
            </form>
        </div>
    );
}

export default Input;
