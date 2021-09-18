/* function User(props) {
    console.log(props);
    return <h1>
        {
            props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş Yapmadınız."
        }
        
        </h1>;
}
 */

//* props bir obje olduğu için yukarıdaki yazım şu şekilde düzenlenebilir..

function User({ name, surname, isLoggedIn, age }) {

    return <h1>
        {
            isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."
        }

    </h1>;
}


//* EXPORT *//
export default User;