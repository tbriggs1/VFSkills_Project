import React, { useCallback } from 'react';
import "@ui5/webcomponents/dist/Panel";
import {AdditionalSkillTable, EssentialSkillTable} from './SkillTable';
import "../styles/skills.css";
import {useHistory} from 'react-router-dom';

const ManagerAssessment = () => {
    const history = useHistory();
    const gotoEmployee = useCallback(() => history.push('/skills'), [history])

    return(
        <div>
            <ui5-button design="Default" onClick={gotoEmployee}>Goto Employee View</ui5-button>

            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Employee Tom" class="full-width">
                <ui5-panel width="100%" accessible-role="Complementary"
                    header-text="Essential Skills" class="full-width">
                        <EssentialSkillTable />
                </ui5-panel>
                
                <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                    <AdditionalSkillTable />
                </ui5-panel>
            </ui5-panel>
            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Employee Beth" class="full-width">
                <ui5-panel width="100%" accessible-role="Complementary"
                    header-text="Essential Skills" class="full-width">
                        <EssentialSkillTable />
                </ui5-panel>
                
                <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                    <AdditionalSkillTable />
                </ui5-panel>
            </ui5-panel>
            
        </div>
    )
}

export default ManagerAssessment;