import React from 'react';
import "@ui5/webcomponents/dist/Panel";
import {EssentialSkillTable} from './SkillTable';

const SkillsAssessment = () => {
    return(
        <div>
            <h3 class="content-color">Obi Wan Sensi</h3>
            <h5>Team Manager</h5>
            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Essential Skills" class="full-width">
                    <ui5-label wrap>Please add your essential skills</ui5-label>
            </ui5-panel>
            <EssentialSkillTable />
        </div>
    )
}

export default SkillsAssessment;