import React, { useState } from 'react';
import { styled } from 'styled-components';
import { StButton } from './Button';

const Label = styled.label`
    line-height: 35px;
`;
const InputBox = styled.input`
    height: 40px;
    margin-right: 30px;
    margin-left: 3px;
    border: solid 1px #333;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 10px;
`;
function Input() {
    const [name, setName] = useState();
    const [price, setPrice] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name) {
            alert('이름을 입력해주세요');
        } else if (!price) {
            alert('가격을 입력해주세요');
        } else {
            // const valueNum = price;
            const platNum = price.replaceAll(',', '');
            alert(`name : ${name} price : ${platNum}`);
            setName('');
            setPrice('');
        }
    };
    const numInput = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(',', ''));
        // const onlyNumber = value.replace(/[^0-9]/g, '');/
        setPrice(removedCommaValue.toLocaleString());
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
