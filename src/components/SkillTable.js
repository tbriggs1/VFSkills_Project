import React, { useEffect, useState } from 'react';
import '../styles/table.css';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js";
import { RadioButton } from '@ui5/webcomponents-react';
import {FlexBox, FlexBoxAlignItems, Label} from '@ui5/webcomponents-react';

import Popup from 'reactjs-popup';
import Search from './Search';
import SearchPage from './SearchPage';
import axios from 'axios';
import {RunRows, ManagerRunRows} from './RunRows';

export const EssentialSkillTable = ({userid}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [aSkill, setASkill] = useState([]);
    const [eSkill, setESkill] = useState([]);
    const [skill, setSkill] = React.useState();
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
    let id = setInterval(() => {
        fetch(`https://135.125.27.98:8000/api/essentialskills/?title=&studID=${userid}`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setESkill(result);
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )}, 1000 )
            return () => clearInterval(id);
    }, [])

    useEffect(() => {
        fetch(`https://135.125.27.98:8000/api/skills/?title=&studID=${userid}`)
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

      const getId = (e) => {
          console.log(e)
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

            <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Employee Rating" demand-popin>
                <span class="Column-span" >Employee Rating *</span>
            </ui5-table-column>

            <ui5-table-column class="table-column" slot="columns"  min-width="600"  popin-text="Manager Rating" demand-popin>
                <span class="Column-span" >Manager Rating</span>
            </ui5-table-column>
            <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="open for manager" demand-popin>
                <span class="Column-span">Open for Manager Rating</span>
            </ui5-table-column>

      
            {items.map(item => (
                <ui5-table-row>
                    <ui5-table-cell>
                    <h3 id={item.id} key={item.id}>
                        {item.title}
                    </h3><Popup trigger={<ui5-button icon="add" id="openPopoverButton" icon-size="10px" aria-labelledby="lblAdd" class="add-btn"></ui5-button>}
                    position="bottom left"><div class="popup-search"><SearchPage skill={item.id} userID={userid} class="search-bar"/></div></Popup>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
                    </ui5-table-cell> 
                    <ui5-table-cell>
                    <FlexBox alignItems={FlexBoxAlignItems.Center}>
                        <Label></Label>
                        <RadioButton name={item.id} text="Yes" />
                        <RadioButton name={item.id} text="No" />
                    </FlexBox>
                </ui5-table-cell>           
                </ui5-table-row>   
                 
                ))
                
                }
    <RunRows items={eSkill}/>
    
  
        </ui5-table>
    </div>
        );
        
    }

}

export const ManagerEssentialSkillTable = ({userid}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [aSkill, setASkill] = useState([]);
    const [eSkill, setESkill] = useState([]);
    const [skill, setSkill] = React.useState();
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
    let id = setInterval(() => {
        fetch(`https://135.125.27.98:8000/api/essentialskills/?title=&studID=${userid}`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setESkill(result);
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )}, 1000 )
            return () => clearInterval(id);
    }, [])

    useEffect(() => {
        fetch(`https://135.125.27.98:8000/api/skills/?title=&studID=${userid}`)
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

      const getId = (e) => {
          console.log(e)
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

            <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Employee Rating" demand-popin>
                <span class="Column-span" >Employee Rating *</span>
            </ui5-table-column>

            <ui5-table-column class="table-column" slot="columns"  min-width="600"  popin-text="Manager Rating" demand-popin>
                <span class="Column-span" >Manager Rating</span>
            </ui5-table-column>
            <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="open for manager" demand-popin>
                <span class="Column-span">Open for Manager Rating</span>
            </ui5-table-column>
            

      
            {items.map(item => (
                <ui5-table-row>
                    <ui5-table-cell>
                    <h3 id={item.id} key={item.id}>
                        {item.title}
                    </h3>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <FlexBox alignItems={FlexBoxAlignItems.Center}>
                        <Label></Label>
                        <RadioButton name={item.id} text="Yes" disabled selected/>
                        <RadioButton name={item.id} text="No" disabled/>
                    </FlexBox>            
                </ui5-table-row>              
                ))
                
                }
    
    <ManagerRunRows items={eSkill}/>
        </ui5-table>
    </div>
        );
        
    }

}

const rowDelete = (e) => {
    const id = e.target.id
    axios.delete(`https://135.125.27.98:8000/api/additonalskills/${id}/`)
    const toasty = document.getElementById("toastCancelled");
        toasty.show();
}


export const AdditionalSkillTable = ({userid}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [aSkill, setASkill] = useState([]);


   useEffect(() => {
        let id = setInterval(() => {
            fetch(`https://135.125.27.98:8000/api/additonalskills/?title=&studID=${userid}`)
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true);
                setASkill(result);
                
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
        },1000 )
        return () => clearInterval(id);
      }, [])

   
    return(
        <div>
            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column class="table-column" slot="columns" >
                    <span class="Column-span">Level 1 Skill</span>
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
                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="open for manager" demand-popin>
                    <span class="Column-span">Open for Manager Rating</span>
                </ui5-table-column>
                

               
                {aSkill.map(item => (
                <ui5-table-row>
                    <ui5-table-cell>
                    <h3 key={item.id}>
                        {item.title}
                    </h3> 
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-select class="select" class="table-cell">
                                <ui5-option>Web Link</ui5-option>
                                <ui5-option>Online course</ui5-option>
                                <ui5-option selected>Project</ui5-option>
                            </ui5-select>
                    </ui5-table-cell>
                    <ui5-table-cell class="table-move">
                        <ui5-textarea class="table-cell" placeholder={item.comments}></ui5-textarea>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell >
                        <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell>
                    <FlexBox class="display" alignItems={FlexBoxAlignItems.Center}>
                        <Label></Label>
                        <RadioButton name={item.id} text="Yes" />
                        <RadioButton name={item.id} text="No" />
                    <ui5-button class="delete-btn" icon="cancel" design="Negative" aria-labelledby="lblCancel" id={item.id} onClick={rowDelete}></ui5-button>
                    </FlexBox>
                </ui5-table-cell>     
                </ui5-table-row>))
                }

       </ui5-table>
       <ui5-toast id="toastCancelled">Deleted</ui5-toast>
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

export const ManagerAdditional = ({userid}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [aSkill, setASkill] = useState([]);


   useEffect(() => {
        let id = setInterval(() => {
            fetch(`https://135.125.27.98:8000/api/additonalskills/?title=&studID=${userid}`)
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true);
                setASkill(result);
                
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                setIsLoaded(true);
                setError(error);
                }
            )
        },1000 )
        return () => clearInterval(id);
      }, [])

   
    return(
        <div>
            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column class="table-column" slot="columns" >
                    <span class="Column-span">Level 1 Skill</span>
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
                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="open for manager" demand-popin>
                <span class="Column-span">Open for Manager Rating</span>
            </ui5-table-column>
                

               
                {aSkill.map(item => (
                <ui5-table-row>
                    <ui5-table-cell>
                    <h3 key={item.id}>
                        {item.title}
                    </h3> 
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-select class="select" class="table-cell">
                                <ui5-option>Web Link</ui5-option>
                                <ui5-option>Online course</ui5-option>
                                <ui5-option selected>Project</ui5-option>
                            </ui5-select>
                    </ui5-table-cell>
                    <ui5-table-cell class="table-move">
                        <ui5-textarea class="table-cell" placeholder={item.comments}></ui5-textarea>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator value={item.employee_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell >
                        <ui5-rating-indicator value={item.manager_rating}></ui5-rating-indicator>
                    </ui5-table-cell>
                    <FlexBox alignItems={FlexBoxAlignItems.Center}>
                        <Label></Label>
                        <RadioButton name={item.id} text="Yes" disabled selected/>
                        <RadioButton name={item.id} text="No" disabled/>
                    </FlexBox>          
                </ui5-table-row>))
                }

       </ui5-table>
       <ui5-toast id="toastCancelled">Deleted</ui5-toast>
        </div>
    )
}