import { useState } from "react";

function App() {
  const [name, setName] = useState('Emre');
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(["Ahmet", "Murat"])

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2> {age} </h2>

      <button onClick={() => setName("Özge")} > Change Name </button>
      <button onClick={() => setAge(26)} > Change Age </button>

      <hr />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* array içindeki eski değerleri korumak için ...friend ile array eklendi. */}
      <button onClick={() => setFriends([...friends, "Mahmut"])} > Add New Friend </button>

    </div>
  );
}

export default App;
