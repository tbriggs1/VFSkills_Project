import React from 'react'
import axios from 'axios'

const RunRows = ({items}) =>{
    const rowDelete = (e) => {
        const id = e.target.id
        axios.delete(`https://135.125.27.98:8000/api/essentialskills/${id}/`)
    }
    
    
    return(
   <>
            {items.map(item => (
        <ui5-table-row>
        <ui5-table-cell>
        <h3 key={item.id}>
            {item.title}
        </h3>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
            <ui5-button class="delete-btn" icon="cancel" design="Negative" aria-labelledby="lblCancel" id={item.id} onClick={rowDelete}></ui5-button>
        </ui5-table-cell>
    </ui5-table-row>))
    }
    </> 
    )

}


export default RunRows;