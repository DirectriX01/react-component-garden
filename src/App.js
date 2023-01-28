import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import siriImage from './images/siri.png';
import alexaImage from './images/alexa.png';
import googleImage from './images/cortana.png';



function App() {
   return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Personal Digital Assisstants</h1>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                <div className="columns">
                    <div className="column is-4"><ProfileCard title="Alexa" handle="@alexa99" imageSrc={siriImage} description="It was made by Amazon"/>
                    </div>
                    <div className="column is-4"><ProfileCard title="Siri" handle="@siri99" imageSrc={alexaImage} description="It was made by Apple"/>
                    </div>
                    <div className="column is-4"><ProfileCard title="Cortana" handle="@cortana99" imageSrc={googleImage} description="It was made by Microsoft"/>
                    </div>    
                </div>
                </section>
            </div>
        </div>
   );
}

export default App;