import React from 'react';
import '../styles/table.css';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js";

export const EssentialSkillTable = () => {
    return(
        <div>      
            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column class="table-column" slot="columns" >
                    <span class="Column-span">Level 1 Skill</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Supplier">
                    <span class="Column-span" >Level 2 Skill</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                    <span class="Column-span" >Employee Rating</span>
                </ui5-table-column>

                <ui5-table-column class="table-column" slot="columns"  min-width="600"  popin-text="Weight" demand-popin>
                    <span class="Column-span" >Manager Rating</span>
                </ui5-table-column>


                <ui5-table-row>
                    <ui5-table-cell>
                        <p>testing</p>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-select class="select">
                            <ui5-option icon="iphone">Phone</ui5-option>
                            <ui5-option icon="ipad">Tablet</ui5-option>
                            <ui5-option icon="laptop" selected>Desktop</ui5-option>
                        </ui5-select>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator></ui5-rating-indicator>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <ui5-rating-indicator></ui5-rating-indicator>
                    </ui5-table-cell>
                </ui5-table-row>
            </ui5-table>
        </div>
    )
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
