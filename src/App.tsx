import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = [
    "Kuala Lumpur",
    "Penang",
    "Johor Bahru",
    "Kuching",
    "Kota Kinabalu",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Button color="success" onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Click on a city to select it <em>(check the console)</em>
        </Alert>
      )}
    </div>
  );
}

export default App;
