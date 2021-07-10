import React, {useState} from 'react';
import styled from 'styled-components';
import {api} from '../util';

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .inputBox {
        width: 120px;
        height: 30px;
        background-color: white;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 10px;
    }

    .submitBox {
        width: 120px;
        height: 40px;
    }
`;

const Form = styled.form`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 1px solid #dddddd;
    &:focus {
        outline: none;
        border: 1px solid #78DEC7;
    }
`;

const Submit = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid #dddddd;
    border-radius: 5px;
    background-color: #78DEC7;
    color: white;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

const H1 = styled.h1`
    font-size: 1.6rem;
    margin: 10px 0 10px 0;
    color: #AAAAAA;
`;

const Register = ({setLoading}) => {
    const [inputs, setInputs] = useState(
        {
            name: '',
            comment: ''
        }
    );

    const {name, comment} = inputs;

    const onChange = e => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        })
        console.log(inputs);
    }

    const onSubmit = e => {
        e.preventDefault();
        
        console.log(inputs);

        api.post('/post/enroll', {
            name: inputs.name,
            comment: inputs.comment
        }).then(res => {
            console.log(res);
            setLoading(true);
        })

        setInputs({
            name: '',
            comment: ''
        })
    }

    return (
        <Container>
            <H1>한 말씀 부탁드립니다.</H1>
            <Form method="post" action="">
                <div className="inputBox">
                    <Input placeholder="이름" onChange={e => onChange(e)} name="name" type="text" value={name}/>
                </div>
                <div className="inputBox">
                    <Input placeholder="한 마디" onChange={e => onChange(e)} name="comment" type="text" value={comment}/>
                </div>
                <div className="submitBox">
                    <Submit onClick={e => onSubmit(e)}>
                        등록
                    </Submit>
                </div>
            </Form>
        </Container>
    );
}

export default Register;