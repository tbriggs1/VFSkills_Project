import React from 'react';

export const EssentialSkillTable = () => {
    return(
        <div>
            <div class="header">
                <span>Products table - resize your browser to make some columns pop-in</span>
                <button id="toggleSticky" style="height: 32px">Toggle Sticky Column Header</button>
            </div>

            <ui5-table class="demo-table" id="table">
                
                <ui5-table-column slot="columns" style="width: 12rem">
                    <span className="Column-span" style="line-height: 1.4rem">Product</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
                    <span className="Column-span" >Supplier</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
                    <span className="Column-span" >Dimensions</span>
                </ui5-table-column>

                <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin>
                    <span className="Column-span" >Weight</span>
                </ui5-table-column>

                <ui5-table-column slot="columns">
                    <span className="Column-span">Price</span>
                </ui5-table-column>

            </ui5-table>
        </div>
    )
}



export const AdditionalSkillTable = () => {
    return(
        <div>

        </div>
    )
}
