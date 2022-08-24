import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;


function App() {
  return (
    <Container>
      <Header>
        <AppName>
          <RecipeImage src="/react-recipe-finder/hamburger.svg" />
          Recipe Finder
        </AppName>
        <SearchBox>
          <SearchIcon src="/react-recipe-finder/search-icon.svg" />
          <SearchInput placeholder="Search Recipe"/>
        </SearchBox>
      </Header>
    </Container>
  );
}

export default App;
