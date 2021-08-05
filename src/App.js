import NavBar from "./components/NavBar.js";
import ItemlistContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/ItemCount.js"
function App() {
    return (
    <div className="App">
      <NavBar />
      <ItemlistContainer />
      <ItemCount />
    </div>
  );
}

export default App;
