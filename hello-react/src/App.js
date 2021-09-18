import "./App.css";

import User from "./components/User"
//  Boolean veya number gönderirken (line-8) süslü parantezler içinde yazılır. {} //
function App() {
    return (
        <>
            <User name="Emre" surname="Samurlu" isLoggedIn={true} age ={28} /> 
        </>
    );
}

export default App;
