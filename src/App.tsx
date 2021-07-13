import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("Scholars")}</h1>;
}

export default App;
