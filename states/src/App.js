import { useState } from "react";

function App() {
  const [name, setName] = useState('Emre');
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(["Ahmet", "Murat"])
  const [address, setAddress] = useState({ title: 'İzmir', zip: 35000 })

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2> {age} </h2>

      <button onClick={() => setName("Özge")} > Change Name </button>
      <button onClick={() => setAge(26)} > Change Age </button>

      <hr />
      <br /> <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* array içindeki eski değerleri korumak için ...friend ile array eklendi. */}
      <button onClick={() => setFriends([...friends, "Mahmut"])} > Add New Friend </button>


      <hr />
      <br /> <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      
      <button onClick={() => setAddress({...address, title: 'İstanbul' })} > Change Address </button>
      {/* <button onClick={() => setAddress({title: 'İstanbul', zip: 34000})} > Change Address </button> */}

    </div>
  );
}

export default App;
