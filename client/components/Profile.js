import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import axios from 'axios';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Footer from '../containers/Footer';

const url = 'http://localhost:3000/'

//state maps to wobbeReducer
const mapStateToProps = (state) => ({
  user_id: state.wobbeReducer.user_id,
  username: state.wobbeReducer.username
})

const Profile = (props) => {
  //state props of user listing and flag for redirect
  const [userListing, setUserListing] = useState([]);
  const [redirect, setRedirect] = useState(false);

  //when the profil mounts, check if user is logged in
  useEffect(() => {
    // console.log(props)
    if(props.username ==='') setRedirect(true)
    //if user is logged in, fetch get req to get the data regarding user listing
    else{
    axios.get(url + 'listing/userItems', {
      params: {
        user_id: props.user_id
      }
    })
      .then(res => {
        setUserListing(res.data)
      })
      .catch(err => console.log(err))
    }
  }, []);
  //check name with s for rendering issue
  const sChecker = (name) =>{
    if(name[name.length-1]==='s') return `${name}'`
    else return `${name}'s`
  }
  //to render multiple listings user made
  const cardList = userListing.map((el, index) => {
    // console.log('listing id: ',el.id);
    return <CardList key={index} {...el} />
  });

  //if the user is logged in, render elements in profile including listings with card
  return (
    redirect === false 
    ?
    <div>
      <div>
        <h1>{sChecker(props.username)} listings </h1>
      </div>
      {cardList}
      <Footer />
    </div>
    :
    <Redirect 
          to={{
            pathname: '/login',
            state:{
                username: props.username
            }
        }}
        />
  )
};


export default connect(mapStateToProps)(Profile); 
