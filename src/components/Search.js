import React, { Component,useEffect,useState } from 'react'
import axios from 'axios';
// import Suggestions from './Suggestions';

// // const { API_KEY } = process.env
// // const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

const base_url = "http://127.0.0.1:8000";

const Search = () => {
    
}


export default Search;
// class Search extends Component {
//   state = {
//     query: '',
//     results: []
//   }

//   getInfo = () => {
//     axios.get(`http://127.0.0.1:8000/api/skills/`)
//       .then(({ data }) => {
//         this.setState({
//           results: data.data
//         }).then(
//             console.log(this.results)
//         )
//       })
//   }

  

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//       }
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input
//           placeholder="Search for..."
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <Suggestions results={this.state.results} />
//       </form>
//     )
//   }
// }

// export default Search