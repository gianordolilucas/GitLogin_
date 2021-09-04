import React from 'react';
import {
    Container,
    Name,
    UserName,
    Description
} from './styles';

const UserDetails = props =>(
    <Container>

    {props?.name ?
        <React.Fragment>
            <Name>{props?.name}</Name>
            <UserName>{props?.email}</UserName>
            <UserName>{props?.location}</UserName>
        </React.Fragment>
        
        :
            <React.Fragment>
                <Name>BIO</Name>
                <Description>{props?.bio}</Description>
            </React.Fragment>
           
        }
    </Container>

);

export default UserDetails