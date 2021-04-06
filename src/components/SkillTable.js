import React, { useEffect, useState } from 'react';
import '../styles/table.css';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js";
import Popup from 'reactjs-popup';
import Search from './Search';

export const EssentialSkillTable = ({userid}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState(0);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(`http://135.125.27.98:8181/api/skills/?title=&studID=${userid}`)
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

    const openPopover = () => {
        
    }
   
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else{
        return (
            <div>
        <ui5-table class="demo-table" id="table">
            
            <ui5-table-column class="table-column" slot="columns" >
                <span class="Column-span">Level 1 Skill</span>
            </ui5-table-column>

            <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                <span class="Column-span" >Employee Rating *</span>
            </ui5-table-column>

            <ui5-table-column class="table-column" slot="columns"  min-width="600"  popin-text="Weight" demand-popin>
                <span class="Column-span" >Manager Rating</span>
            </ui5-table-column>

      
            {items.map(item => (
                <ui5-table-row>
                    <ui5-table-cell>
                    <h3 key={item.id}>
                        {item.title}
                    </h3> <br/> <Popup trigger={<ui5-button icon="add" id="openPopoverButton" aria-labelledby="lblAdd" class="add-btn" onClick={openPopover}></ui5-button>}
                    position="bottom left"><Search/></Popup>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                </ui5-table-row>))
                }

            
                
                
        </ui5-table>
    </div>
        );
        
    }

}



export const AdditionalSkillTable = () => {
    return(
        <div>
            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column class="table-column" slot="columns" >
                    <span class="Column-span">Level 1 Skill</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="5000em" popin-text="Level 2 Skill">
                    <span class="Column-span" >Level 2 Skill</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Acquired By" demand-popin>
                    <span class="Column-span" >Acquired By</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Acquired By" demand-popin>
                    <span class="Column-span" >Comments</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Self Rating" demand-popin>
                    <span class="Column-span" >Self Rating</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Manager Rating" demand-popin>
                    <span class="Column-span" >Manager Rating</span>
                </ui5-table-column>

               


                <ui5-table-row class="table-row">
                    <ui5-table-cell >
                        <p>testing</p>
                    </ui5-table-cell>
                    <ui5-table-cell  class="table-cell">
                        <p>testing</p>
                    </ui5-table-cell>
                    <ui5-table-cell  >
                        <ui5-select class="select" class="table-cell">
                            <ui5-option icon="iphone">Phone</ui5-option>
                            <ui5-option icon="ipad">Tablet</ui5-option>
                            <ui5-option icon="laptop" selected>Desktop</ui5-option>
                        </ui5-select>
                    </ui5-table-cell>
                    <ui5-table-cell class="table-move">
                        <ui5-textarea class="table-cell" placeholder="Type as much text as you wish"></ui5-textarea>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator class="table-cell"></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell >
                        <ui5-rating-indicator class="table-cell"></ui5-rating-indicator>
                    </ui5-table-cell>
                </ui5-table-row>
            </ui5-table>
        </div>
    )
}

export const DevelopmentTable = () => {
    return(
        <div>
            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column class="table-column" slot="columns" >
                    <span class="Column-span">Development Goals</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" popin-text="Level 2 Skill">
                    <span class="Column-span">Mapped Skills</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Acquired By" demand-popin>
                    <span class="Column-span">Associated Content</span>
                </ui5-table-column>


               


                <ui5-table-row class="table-row">
                    <ui5-table-cell >
                        <p>Automate proccess and operations by developing programs that improve efficiency.</p>
                    </ui5-table-cell>
                    <ui5-table-cell  class="table-cell">
                        <ui5-input value="Input"></ui5-input>
                    </ui5-table-cell>
                    <ui5-table-cell  >
                        <ui5-select class="select" class="table-cell">
                            <ui5-option>Web Link</ui5-option>
                            <ui5-option>Online course</ui5-option>
                            <ui5-option selected>Project</ui5-option>
                        </ui5-select>
                    </ui5-table-cell>
                </ui5-table-row>
                <ui5-table-row class="table-row">
                    <ui5-table-cell >
                        <p>Automate proccess and operations by developing programs that improve efficiency.</p>
                    </ui5-table-cell>
                    <ui5-table-cell  class="table-cell">
                        <ui5-input value="Input"></ui5-input>
                    </ui5-table-cell>
                    <ui5-table-cell  >
                        <ui5-select class="select" class="table-cell">
                            <ui5-option>Web Link</ui5-option>
                            <ui5-option>Online course</ui5-option>
                            <ui5-option selected>Project</ui5-option>
                        </ui5-select>
                    </ui5-table-cell>
                </ui5-table-row>
                <ui5-table-row class="table-row">
                    <ui5-table-cell >
                        <p>Automate proccess and operations by developing programs that improve efficiency.</p>
                    </ui5-table-cell>
                    <ui5-table-cell  class="table-cell">
                        <ui5-input value="Input"></ui5-input>
                    </ui5-table-cell>
                    <ui5-table-cell  >
                        <ui5-select class="select" class="table-cell">
                            <ui5-option>Web Link</ui5-option>
                            <ui5-option>Online course</ui5-option>
                            <ui5-option selected>Project</ui5-option>
                        </ui5-select>
                    </ui5-table-cell>
                </ui5-table-row>
                
            </ui5-table>
        </div>
    )
}