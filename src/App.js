import styled from 'styled-components';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

const AppStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "s m m m";
`;

const App = () => {
  return (
    <AppStyled>
      <GlobalStyles />
      <Header />
      <Main />
      <Sidebar />
    </AppStyled>
  );
}

export default App;
