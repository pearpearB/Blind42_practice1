import styled from 'styled-components';
import egg from '../images/egg.png';
const Container = styled.div`
	height: 6vh;
	display: flex;
	justify-content: end;
	border: solid 2px black;
	padding: 0.6vh 3vw 0.6vh 0.6vw;
`;

const UserImg = styled.div`
	display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    height: 4.5vh;
	}
`;

const UserName = styled.div`
	display: flex;
	align-items: center;
	margin: 1.5vh;
	font-size: 2vh;
`;

const Header = () => {
	return (
		<>
			<Container>
				<UserImg>
					<img src={egg} alt='profileimg' />
				</UserImg>
				<UserName>
					<span>
						<strong>카뎃</strong>
					</span>
				</UserName>
			</Container>
		</>
	);
};

export default Header;