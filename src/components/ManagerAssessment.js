import React, { useCallback } from 'react';
import "@ui5/webcomponents/dist/Panel";
import {AdditionalSkillTable, EssentialSkillTable, ManagerAdditional, ManagerEssentialSkillTable} from './SkillTable';
import "../styles/skills.css";
import {useHistory} from 'react-router-dom';
import Header from './Header';

const ManagerAssessment = () => {
    const history = useHistory();
    const gotoEmployee = useCallback(() => history.push('/skills'), [history])
    const title = "Manager View";

    return(
        <div>
            <Header title={title}/>
            <ui5-button design="Default" onClick={gotoEmployee}>Goto Employee View</ui5-button>

            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Employee Tom" class="full-width" collapsed="true">
                <ui5-panel width="100%" accessible-role="Complementary"
                    header-text="Essential Skills" class="full-width">
                        <ManagerEssentialSkillTable userid="tom"/>
                <ui5-button class="submit-btn" design="Positive">Save and Submit</ui5-button>
                <ui5-button design="Negative">Cancel</ui5-button>
                
                </ui5-panel>
                
                <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                    <ManagerAdditional userid="tom"/>
                </ui5-panel>
            </ui5-panel>
            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Employee Beth" class="full-width" collapsed="true">
                <ui5-panel width="100%" accessible-role="Complementary"
                    header-text="Essential Skills" class="full-width">
                        <EssentialSkillTable userid="beth"/>
                </ui5-panel>
                
                <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                    <AdditionalSkillTable userid="beth"/>
                    <ui5-button class="submit-btn" design="Positive">Save and Submit</ui5-button>
                    <ui5-button design="Negative">Cancel</ui5-button>
                </ui5-panel>
            </ui5-panel>
            
        </div>
    )
}

export default ManagerAssessment;