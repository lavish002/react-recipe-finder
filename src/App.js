import { Container } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import styled from "styled-components";

const Container = styled.div`
  display: findByLabelText;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555
`;

const AppNameComponet = styled.div``;
const SearchComponet = styled.div``;


function App() {
  return (
    <Container> 
      <Header>
        <AppNameComponet>
        Recipe Finder
        </AppNameComponet>
        <SearchComponet>
          {/* <img src="/search-icon.svg"/> */}
        </SearchComponet>
      </Header>
    </Container>
  );
}

export default App;
