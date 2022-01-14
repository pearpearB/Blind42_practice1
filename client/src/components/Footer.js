import styled from 'styled-components';

const FooterWrap = styled.div`
	text-align: center;
	height: 15vh;
	background: #E5E5E5;
`;

const List = styled.div`
	span {
		margin: 2em;
	}
	padding: 2em
`;

const Detail = styled.div``;

const Footer = () => {
	return (
		<>
			<FooterWrap>
				<List>
					<span>RULES</span>
					<span>ABOUT</span>
					<span>MAKER</span>
					<span>CONTACT</span>
				</List>
				<Detail>Copyright © 2022 42Blind. All rights reserved.</Detail>
			</FooterWrap>
		</>
	);
}

export default Footer;