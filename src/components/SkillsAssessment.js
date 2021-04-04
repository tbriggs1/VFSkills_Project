import React, { useCallback } from 'react';
import "@ui5/webcomponents/dist/Panel";
import {AdditionalSkillTable, EssentialSkillTable} from './SkillTable';
import "../styles/skills.css";
import {useHistory} from 'react-router-dom';
const SkillsAssessment = () => {

        const history = useHistory();
        const gotoManager = useCallback(() => history.push('/manager'), [history])
    

    return(
        <div>
            <ui5-button design="Default" onClick={gotoManager}>Goto Manager View</ui5-button>
            <h3 class="content-color">Obi Wan Sensi</h3>
            <h5>Team Manager</h5>
            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Essential Skills" class="full-width">
                    <ui5-label wrap>Please add your essential skills</ui5-label>
                    <EssentialSkillTable />
            </ui5-panel>
            <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                <ui5-label wrap>Please add your additonal skills</ui5-label>
                <ui5-input id="searchInput" placeholder="Enter search criteria ..." width="100%">
	                <ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
                </ui5-input>

                <AdditionalSkillTable />
            </ui5-panel>
        </div>
    )
}

export default SkillsAssessment;