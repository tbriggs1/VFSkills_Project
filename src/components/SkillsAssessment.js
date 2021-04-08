import React, { useCallback, useState } from 'react';
import "@ui5/webcomponents/dist/Panel";
import {AdditionalSkillTable, EssentialSkillTable} from './SkillTable';
import Search from './Search';
import "../styles/skills.css";
import {useHistory} from 'react-router-dom';
import Header from './Header';
import SearchPage from './SearchPage';



const SkillsAssessment = () => {
    const history = useHistory();
    const gotoManager = useCallback(() => history.push('/manager'), [history])
    const title = "Employee View";

    const toast = () => {
        const toasty = document.getElementById("wcToastBasic");
        toasty.show();
    }

    const toastCancel = () => {
        const toasty = document.getElementById("wcToastCancel");
        toasty.show();
    }

       
    return(
        <div>
            <Header title={title}/>
            <ui5-button design="Default" id="managerbutton" onClick={gotoManager}>Goto Manager View</ui5-button>
            <h3 class="content-color">Tom</h3>
            <h5>Team Employee</h5>
            <ui5-panel width="100%" accessible-role="Complementary"
                header-text="Essential Skills" class="full-width">
                    <ui5-label class="label-heading" wrap>Please add your essential skills</ui5-label>
                    <EssentialSkillTable userid="tom"/>
                    <ui5-button class="submit-btn" id="submit-btn" onClick={toast} design="Positive">Save and Submit</ui5-button>
                    <ui5-toast id="wcToastBasic">Successfully Submitted</ui5-toast>
                    <ui5-button design="Negative" onClick={toastCancel}>Cancel</ui5-button>
                    <ui5-toast id="wcToastCancel">Cancelled</ui5-toast>
            </ui5-panel>
            <ui5-panel width="100%" accessible-role="Complementary" header-text="Additonal Skills">
                <ui5-label class="label-heading" wrap>Please add your additonal skills</ui5-label>
                <Search/>
                <AdditionalSkillTable userid="tom"/>
                <ui5-button class="submit-btn" design="Positive" onClick={toast}>Save and Submit</ui5-button>
                <ui5-button design="Negative" onClick={toastCancel}>Cancel</ui5-button>
                
            </ui5-panel>

        </div>
    )
}

export default SkillsAssessment;