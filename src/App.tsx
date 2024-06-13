import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Box>
          <SearchInput />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
