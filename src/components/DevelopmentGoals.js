import React from 'react'
import Header from "./Header";
import {DevelopmentTable} from './SkillTable';
const DevelopmentGoals = () => {
    const title = "Development Goals";
    
    return(
        <div>
             <Header title={title} />
             <DevelopmentTable />
        </div>
    )
}

export default DevelopmentGoals;