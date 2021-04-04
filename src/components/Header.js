import React from 'react';
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/Assets.js";
import home from "@ui5/webcomponents-icons/dist/home.js";
import '@ui5/webcomponents-icons/dist/json-imports/Icons.js';

const Header = () => {
    return(
        <div>
            <ui5-bar design="Subheader">
                
                <ui5-button icon="home" title="Go home" slot="startContent"></ui5-button>
                <ui5-label id="basic-label" slot="middleContent">Subheader Title</ui5-label>
                <ui5-button icon="action-settings" title="Go to settings" slot="endContent"></ui5-button>
            </ui5-bar>
        </div>
    )
}

export default Header;