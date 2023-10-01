import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase";




const provider = new GoogleAuthProvider();
const googleauth = getAuth();
const auth = getAuth(app);

const Loging = () => {

  const  handleclick = () =>{
    signInWithPopup(googleauth, provider)

    .then((result) => {
        const user = result.user
    })
    .catch((error) => {
        console.log('error')
    })
  }


    return (
        <div>
            <button onClick={handleclick}>Loging from google</button>
            
            
            
        </div>
    );
};

export default Loging;