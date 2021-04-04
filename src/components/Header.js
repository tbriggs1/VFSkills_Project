import React from 'react';
import "@ui5/webcomponents-icons/dist/home.js";


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