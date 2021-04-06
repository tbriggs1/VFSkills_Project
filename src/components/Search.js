import React from 'react';

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];


const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [people, setPeople] = React.useState([ ]);
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
       console.log(searchTerm.length);
       if (searchTerm.length === 1){
           setPeople([])
       }
     };
    React.useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm.toLowerCase())
       );
       setPeople([ "Siri",
       "Alexa",
       "Google",
       "Facebook",
       "Twitter",
       "Linkedin"]);
       setSearchResults(results);
     }, [searchTerm]);

     React.useEffect(() => {
        fetch(`http://135.125.27.98:8181/api/skills/`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])


if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else{
        items.map(item => (
                item.SubSkill
                
                ))
                
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
                <li>{item}</li>
                ))}
            </ul>
    </div>
    );
    }
}
export default Search