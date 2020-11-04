import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Footer from '../containers/Footer'
const url = 'http://localhost:3000/'
/**
 * name: audi a7
 * category : car
 */

const Listing = (props) => {
  //create an array of cards
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    // console.log(props.search)
    //if the user inputs an item and category is all
    //fetch get request to searchall route
    if (props.search.searchValue && props.search.category === 'All') {
      console.log('here i am')
      // console.log(props.search)
      console.log(props.user_id)
      axios.get(url + 'listing/searchall', {
        params: {
          name: props.search.searchValue.toLowerCase().trim(),
          user_id: props.user_id
        }
      })
        .then(res => {
          console.log('res:', res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    //if the user inputs an item and category is not all
    //fetch get request to search route with category passed in
    else if (props.search.searchValue && props.search.category !== 'All') {
      console.log('here i am 2')
      axios.get(url + 'listing/search', {
        params: {
          name: props.search.searchValue.toLowerCase().trim(),
          category_id: props.search.category,
          user_id: props.user_id
        }
      })
        .then(res => {
          console.log(res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    //if user did not put in search bar, list everything in the database
    else {
      axios.get(url + 'listing/all')
        .then(res => {
          console.log(res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])//end of useEffect

  //creating an array of listing card for each item in the library state
  const cardList = library.map((el, index) => {
    return <CardList key={index} {...el} />
  })

  //listing component that contains array of cardList components and footer
  return (
    <div className="listylist">
      {cardList}
      <Footer />
    </div>
  );
}
//state map to reducer
const mapStateToProps = (state) => ({
  search: state.wobbeReducer.search,
  user_id: state.wobbeReducer.user_id
})
export default connect(mapStateToProps)(Listing);