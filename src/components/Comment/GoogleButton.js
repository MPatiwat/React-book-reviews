import React , {useState} from "react";
import GoogleLogin from 'react-google-login';
import {Link} from "react-router-dom"
import GoogleLogout from 'react-google-login';

export default function GoogleButton() {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [url,setUrl] = useState("");
  
    const responseGoogle = response => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
      }
    return(
      <>
      {/* <h2>Email : {email}</h2>
      <h2>Name : {name}</h2>
      <center><img src={url} alt={name}/></center> */}
    <GoogleLogin
          clientId="113278865398-178gksrb8s8t7nalj71s9atflmj1760p.apps.googleusercontent.com"
          render={renderProps => (
            <Link to="/Addbook">
          <button
              className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
              onClick={renderProps.onClick} disabled={renderProps.disabled}
          >
          <img
              alt="..."
              className="w-5 mr-1"
              src={require("assets/img/google.svg").default}
          />
              Google
          </button>
          </Link>
          )}
          onSuccess={responseGoogle}
         
          isSignedIn={true}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
    />
    {/* <GoogleLogout
        clientId="113278865398-178gksrb8s8t7nalj71s9atflmj1760p.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={}
        //onLogoutFailure={err => console.log(err)}
    /> */}
    </>
    )
}