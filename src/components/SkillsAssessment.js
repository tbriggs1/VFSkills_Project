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
                    
                    <ui5-label wrap>Short text.</ui5-label>
                    <br/>
                    <ui5-label wrap>Another text.</ui5-label>
                    <p class="content-color">
                        Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.
                    </p>
            </ui5-panel>
            <EssentialSkillTable />
        </div>
    )
}

export default SkillsAssessment;