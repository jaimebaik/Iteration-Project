import React,{useState, useEffect} from 'react';
import Main from './Main';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as actions from '../actions/actions'
// import Login from '../components/Login';

const Home = (props) => {
    //we're declaring state. It's going to start as false. 
    //flag for checking for redirecting a page
    const [redirect, setRedirect] = useState(false);

    //uses props.location from react-router-dom to redirect page 
    //UseEffect is first checking props.location.state saying 
    //when the Home component mounts to the app, it will check the condition of the state. 
    useEffect(()=>{
        if(props.location.state){
            props.setID(props.location.state.id);
            props.setLocation(props.location.state.location)
            props.setUsername(props.location.state.username)
        }
        //If the props.username doesn't exist yet,
        else if(props.username ==='') setRedirect(true)
    },[])
    //passed in from redirect tag in Login- 
    //when you want to get something out of that state, it's actually in props.location.state- so in the location object is where you'd see the state object 
    const renderRedirect = () => {
        //checking if user is logged in- it they're not logged in, we set redirect to true, which re-renders and sends it to /login. There's a renderRedirect function on line 24- its a function that returns a Redirect component. If it's not true, we redirect them to the main page
        if (redirect) {
          return <Redirect 
          to={{
            pathname: '/login',
            state:{
                username: props.username
            }
        }}
        />
        }
      }

    return ( 
        <div className="home-div">
            {renderRedirect()}
            <Main/>
        </div>
     );
}

const mapStateToProps = (state)=>({
    username:state.wobbeReducer.username
})

const mapActionToProps ={
    setUsername : actions.setUsername,
    setID : actions.setID,
    setLocation : actions.setLocation
}

export default connect(mapStateToProps, mapActionToProps)(Home);