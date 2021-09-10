import {
    Section,
    Title,
    ListOfStarredsContainer,
    Starred,
    StarredName,
    StarredDescription
} from './styles'

const StarredContainer = props => {
    return (
        <Section>
            <Title>{(props.name)?.split(' ')[0]}</Title>
            <ListOfStarredsContainer>
                {
                /* Percorrer o array de favoritos caso ele contenha algum elemento, caso contrario informa que não tem favoritos*/    
                props.starreds.length > 0 ?
                (props?.starreds).map( starred => (
                    <Starred key={starred?.id}>
                        <StarredName>{starred?.name}</StarredName>
                        <StarredDescription>{starred?.description}</StarredDescription>
                    </Starred>
                ))
                :
                <Starred>
                        <StarredName>Nada para mostrar</StarredName>
                        <StarredDescription>Não foi encontrado nenhum favorito para o usuário</StarredDescription>
                </Starred>
            }
            </ListOfStarredsContainer>
        </Section>

    );
}
export default StarredContainer