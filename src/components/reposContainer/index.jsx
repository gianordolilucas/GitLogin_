import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoName,
    RepoDescription
} from './styles'

const ReposContainer = props => {
    return (
        <Section>
            <Title>{(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map( repo => (
                    <Repo key={repo?.id}>
                        <RepoName>{repo?.name}</RepoName>
                        <RepoDescription>{repo?.descripition}</RepoDescription>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>

    );
}
export default ReposContainer