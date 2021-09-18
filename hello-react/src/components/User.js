//* IMPORT *//
import PropTypes from "prop-types";

//******* END *******//

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

function User({ name, surname, isLoggedIn, age, friends, address }) {

    if (!isLoggedIn){
        return <div>Giriş Yapmadınız.</div>
    }

    return (
        <>
            <h1>{`${name} ${surname} (${age})`}</h1>
            {address.title} {address.zip}

            <br/>
            <br/>

            {
            friends && 
            friends.map((friend) => <div key={friend.id}>{friend.name}</div>)
            }
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
}

User.defaultProps = {
    name: "İsim Yok!",
    isLoggedIn: false,
}

//* EXPORT *//
export default User;

//******* END *******//