import{
    Container,
    ProfilePhoto
} from './styles'

const UserPhoto = props => (
    <Container>
        <ProfilePhoto src={props?.url} alt={props?.alternativeText }/>
    </Container>

);

export default UserPhoto