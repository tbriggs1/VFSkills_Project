import React from 'react';
import axios from 'axios';


const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [people, setPeople] = React.useState([ ]);
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [subskill, setSubskill] = React.useState([]);
    // const [title, setTitle] = React.useState([]);
    const title = []
    
    React.useEffect(() => {
      fetch(`https://135.125.27.98:8000/api/skills/`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result); 
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    React.useEffect(() => {
      fetch(`https://135.125.27.98:8000/api/subskills/`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setSubskill(result); 
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    const handleChange = event => {
       setSearchTerm(event.target.value);
       console.log(event.target.value);
       if (event.target.value.length === 0){
           setPeople([])
       }
     };
    React.useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm.toLowerCase())
       );
       
       setPeople(title);
       setSearchResults(results);
     }, [searchTerm]);

    
const addRow = (e) => {
  console.log(e.target.innerText)
  const body = {title: e.target.innerText, employee_rating: 1, manager_rating: 1, studID: 'tom' };
  axios.post('https://135.125.27.98:8000/api/skills/', body);
}

if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else{  
      subskill.map(item => {
        title.push(item.title)
       })
    return (
    <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                <li onClick={addRow}>{item}</li>
                ))}
            </ul>
    </div>
    );
    }
}
export default Search