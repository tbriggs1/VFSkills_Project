import "@ui5/webcomponents/dist/Card";
import "../styles/homepage.css";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";
const Homepage = () => {
    const testClick = () =>
    {
        console.log("Works")
    }

    return(
        <div>
            <section className="card-section">
                <ui5-card  heading="Skills Assessment" subheading="Click to Enter" class="small" onClick={testClick}>   
                   
                    <div className="card-body">           
                        <button>Click to Enter</button>
                    </div>
                </ui5-card>
                <ui5-card heading="Development Goals" subheading="Click to Enter" class="small">              
                
                </ui5-card>
                <ui5-card heading="My Direct Reportees" subheading="Click to Enter" class="small">              
                    <ui5-list separators="Inner" class="content-padding">
                        <ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
                        <ui5-li icon="wallet" icon-end>Finance</ui5-li>
                        <ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
                    </ui5-list>
                </ui5-card>
            </section>
        </div>
    )
}

export default Homepage;