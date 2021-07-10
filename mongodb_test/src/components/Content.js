import React from 'react';
import styled, {css} from 'styled-components';
import {RiDeleteBinLine, RiPencilLine} from 'react-icons/ri';
import {api} from '../util';

const iconstyle = css`
    width: 30px;
    height: 30px;
    color: #dddddd;
    cursor: pointer;
    transition: color 0.2s;
    margin-right: 15px;
`;

const DeleteButton = styled(RiDeleteBinLine)`
    ${iconstyle};

    &:hover {
        color: #D83A56;
    }
`;

const ModifyButton = styled(RiPencilLine)`
    ${iconstyle};

    &:hover {
        color: #78DEC7;
    }
`;

const Container = styled.div`
    width: 80vw;
    height: 70px;
    border-radius: 10px;
    border: 2px solid #dddddd;
    display: flex;
    margin: 15px;
    &:hover {
        border: 2px solid #78DEC7;
    }

    .textBox {
        flex: 8;
    }

    .iconBox {
        flex: 5;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    transition: border 0.2s;
`;

const P = styled.p`
    padding: 10px;
    .pname {
        font-size: 1.4rem;
    }
    .pcomment {
        font-size: 1rem;
    }
`;

const Content = ({user}) => {

    const onDelete = id => {
        api.delete('/delete/comment', {
            params: {
                id: id
            }
        }).then(res => {
            console.log(res);
        })
    }

    return (
        <Container>
            <div className="textBox">
                <P>
                    <p className="pname">{user.name}</p>
                    <p className="pcomment">{user.comment}</p>
                </P>
            </div>
            <div className="iconBox">
                <DeleteButton onClick={() => onDelete(user.id)}/>
                <ModifyButton/>
            </div>
        </Container>
    );
}

export default Content;