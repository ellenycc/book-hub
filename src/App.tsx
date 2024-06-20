import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
// import SearchInput from "./components/SearchInput";
import Main from "./components/Main";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
