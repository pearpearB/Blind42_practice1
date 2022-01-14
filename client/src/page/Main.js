import styled from "styled-components/macro"
import Menubar from "../components/Menubar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppContainer = styled.div``;

const Left = styled.div``;

const Right = styled.div``;

const MainContainer = styled.div``;

const Main = () => {
	return (
		<>
			<AppContainer>
				<Left>
					<Menubar />
				</Left>
				<Right>
					<Header />
					<MainContainer></MainContainer>
					<Footer />
				</Right>
			</AppContainer>
		</>
	);
}

export default Main;