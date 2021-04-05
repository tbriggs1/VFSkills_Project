import "@ui5/webcomponents/dist/Card";
import "../styles/homepage.css";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import {Link} from 'react-router-dom';
import Header from "./Header";

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
                        <h5>Welcome to the skills assessment, click on the button below assess your skills</h5>
                        </div>
                    </ui5-card>
                </Link>
                <ui5-card  avatar="home" icon="home" heading="Development Goals" class="small" onClick={testClick}>   
                    
                    <div className="card-body">           
                    <h5>Welcome to development goals, click on the button below to view goals</h5>
                    </div>
                </ui5-card>
                <Link to="/manager">
                <ui5-card  avatar="home" icon="home" heading="Direct Reportees" class="small" onClick={testClick}>   

                        <div className="card-body">           
                        <h5>Welcome to your direct reportees, click on the button below to see reportees</h5>
                        </div>
                    </ui5-card>
                </Link>
            </section>
        </div>

    )
}

export default Homepage;