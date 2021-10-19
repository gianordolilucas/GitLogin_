import React from 'react';
import { useHistory } from 'react-router-dom'

import {
    Container,
    NumberContainer,
    NumberValue,
    NumberDatails,
    NumberContainerFollow
} from './styles'

const UserNumbers = props => {
    const history = useHistory();
    const handleOnclick = route => history.push(route);

    return (
        <Container>

            {props.userFollow ?
                <React.Fragment>
                    {/* Seguidores */}
                    <NumberContainerFollow >
                        <NumberValue>{props.followers}</NumberValue>
                        <NumberDatails>Seguidores</NumberDatails>
                    </NumberContainerFollow>

                    {/* Seguindo */}
                    <NumberContainerFollow >
                        <NumberValue>{props.following}</NumberValue>
                        <NumberDatails>Seguindo</NumberDatails>
                    </NumberContainerFollow>

                    {/* Repositorios */}
                    <NumberContainerFollow >
                        <NumberValue>{props.repos}</NumberValue>
                        <NumberDatails>Repositorios</NumberDatails>
                    </NumberContainerFollow>
                </React.Fragment>
                :
                <React.Fragment>
                    {/* Seguidores */}
                    <NumberContainer onClick={() => handleOnclick('/followers')}>
                        <NumberValue>{props.followers}</NumberValue>
                        <NumberDatails>Seguidores</NumberDatails>
                    </NumberContainer>

                    {/* Seguindo */}
                    <NumberContainer onClick={() => handleOnclick('/following')}>
                        <NumberValue>{props.following}</NumberValue>
                        <NumberDatails>Seguindo</NumberDatails>
                    </NumberContainer>

                    {/* Repositorios */}
                    <NumberContainer onClick={() => handleOnclick('/repos')}>
                        <NumberValue>{props.repos}</NumberValue>
                        <NumberDatails>Repositorios</NumberDatails>
                    </NumberContainer>
                </React.Fragment>
            }
        </Container>
    )
}

export default UserNumbers