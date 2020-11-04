import React, {useState} from 'react';
import logo from '../public/WobbeUp.png';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import {Redirect} from 'react-router-dom'

//initial state for user to set signupInfo
const initialSignupState = {
  real_name:'',
  username:'',
  password:'',
  location: ''
}

const url = 'http://localhost:3000/'

const Signup = (props) => {
  //state props for signup
  const [signupInfo, setSignupInfo] = useState(initialSignupState);
  const [infoFromDB, setInfoFromDB] = useState({})
  const [redirect, setRedirect] = useState(false);
  
  //after signup, check if the user is in the database for redirect
  const handleRedirect = () =>{
    axios.get(url+'account/finduser', {
      params:{
      username: signupInfo.username,
      location: signupInfo.location
    }
    }).then(res=>{
      setInfoFromDB(res.data)
      setRedirect(true);
    }).catch(err => console.log(err)) 
  }

  //update info for the user 
  const updateInfo = (e) => {
    const {name, value} = e.target
    setSignupInfo({
      ...signupInfo,
      [name] : value
    })
  }

  //submit button for signup page to fetch post request to server
  //couple with handleRedirect
  const submitSignup = (e) =>{
    e.preventDefault();
    axios.post(url + 'account/signup/', {
      params: {
        real_name: signupInfo.real_name,
        username: signupInfo.username,
        password: signupInfo.password,
        location: signupInfo.location
      }
    })
    .then(response => {
      props.setUsername(signupInfo.username)
    })
    .then(()=> handleRedirect())
    .catch(err => console.log(err))
  }

  //elements in signup component
  //if the user did not attempt sign up yet
  return (
    redirect === false ? 
    <div className='signup-container'>
        <div className='signup-logo-container'>
          {/* <img className="signup-logo" src={logo}></img> */}
        </div>
      <div className="signup-form-div">
        <div>
          <h1 className="signuptext">Signup up to WOBBE UP!</h1>
        </div>
        <form autoComplete='off' onSubmit={submitSignup}>
          {/* real_name, username, password, location */}
          <label className="signuplabel">Nickname:</label>
          <input className="signupinput"
            onChange={updateInfo}
            type='text'
            name='real_name'
            value={signupInfo.real_name}
          />
          <label className="signuplabel">Username:</label>
          <input className="signupinput"
            onChange={updateInfo}
            type='text'
            name='username'
            value={signupInfo.username}

          />
          <label className="signuplabel">Password:</label>
          <input className="signupinput"
            onChange={updateInfo}
            type='password'
            name='password'
            value={signupInfo.password}
          />
          <label className="signuplabel">Zip Code:</label>
          <input className="signupinput"
            onChange={updateInfo}
            type='number'
            name='location'
            value={signupInfo.location}
          /><br/>
          <input className="signupinput signupsubmit"
                type="submit" 
                value="Submit"
              />
        </form>
      </div>
    </div>
    :
    <Redirect 
      to={{
        pathname: '/',
        state: infoFromDB
    }}
    />
  )
}
//state maps to wobbeReducer
const mapStateToProps = (state) => ({
  username: state.wobbeReducer.username
})
//set function maps to action
//map action to dispatch which makes reducer to update state
const mapActionToProps = {
  setUsername: actions.setUsername
};

export default connect(mapStateToProps, mapActionToProps)(Signup)



// export default Signup;


