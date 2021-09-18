//* IMPORT *// 
import "./App.css";
import User from "./components/User";

//******* END *******//

const friends = [
    {
        id: 1,
        name: "Ahmet",
    },
    {
        id: 2,
        name: "Mehmet",
    },
    {
        id: 3,
        name: "Cansu",
    },
    {
        id: 4,
        name: "Evrim",
    },
];

//  Boolean veya number gönderirken (line-8) süslü parantezler içinde yazılır. {} //
function App() {
    return (
        <>
            <User
                name="Emre"
                surname="Samurlu"
                isLoggedIn={true} // comment açıp kapatınca defaultProps kullanımı görünüyor.
                age="28"
                friends={friends}
                address={{
                    title: "Buca / İzmir",
                    zip: 35000,
                }}
            />
        </>
    );
}


//* EXPORT *//
export default App;

//******* END *******//