import React from 'react'

const Suggestions = ({items, error, isLoaded}) => {
//   const options = props.results.map(r => (
//     <li key={r.id}>
//       {r.name}
//     </li>
//   ))
//   return <ul>{options}</ul>
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<ul>
        {items.map(item => (
            <li key={item.id}>
            {item.title} {item.subSkill}
            </li>
        ))}
        </ul>
        )
    }
}

export default Suggestions