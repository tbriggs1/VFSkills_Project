import "@ui5/webcomponents/dist/Card";
import "../styles/homepage.css";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import {Link} from 'react-router-dom';
import Header from "./Header";
import SideNavigation from "./SideNavigation";

const Homepage = () => {
    const testClick = () =>
    {
        console.log("Works")
    }
const title = "Home";

    return(
        <div>
            <Header title={title} />
            
            <section className="card-section">
                
                <Link to="/skills">
                    <ui5-card  avatar="home" icon="home" heading="Skills Assessment" class="small" onClick={testClick}>   
                    
                        <div className="card-body">           
                        <h4>Welcome to skills assessment <br/> Click on the button below assess your skills</h4>
                        </div>
                        <ui5-button design="Default">Goto Skills</ui5-button>
                    </ui5-card>
                </Link>
                <Link to="/development">
                    <ui5-card  avatar="home" icon="home" heading="Development Goals" class="small" onClick={testClick}>   
                        
                        <div className="card-body">           
                        <h4>Welcome to development goals <br/> Click on the button below to view goals</h4>
                        </div>
                        <ui5-button design="Default">Goto Development Goals</ui5-button>
                    </ui5-card>
                </Link>
                <Link to="/manager">
                <ui5-card  avatar="home" icon="home" heading="Direct Reportees" class="small" onClick={testClick}>   

                        <div className="card-body">           
                        <h4>Welcome to your direct reportees <br/> Click on the button below to see reportees</h4>
                        </div>
                        <ui5-button design="Default">View Direct Reportees</ui5-button>
                </ui5-card>
                </Link>
            </section>
        </div>

    )
}

export default Homepage;