import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Content from './Content';
import {api} from '../util';

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Contents = ({loading, setLoading}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/get/users').then(res => {
            console.log(res);
            setUsers(res.data);
            setLoading(false);
        })
    }, [loading])

    if(loading)
        return <Container>Now Loading</Container>

    return (
        <Container>
            {users.map((user, i) => 
                <Content key={i} user={user} />
            )}
        </Container>
    );
}

export default Contents;