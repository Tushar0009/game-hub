import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/nav_bar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem  area={"nav"}>
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
