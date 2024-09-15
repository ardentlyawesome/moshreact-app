import ListGroup from "./components/ListGroup";

function App() {
  const items = ['Lisbon', 'London', 'Mexico City', 'Delhi', 'Marseille'];

  const handleSelectItem = (item: string) => {
    console.log(`You selected: ${item}`);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;