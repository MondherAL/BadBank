import Card from '../components/card';
import image from '../images/bank.png'

function Home() {
    return (
       <Card
            txtcolor="white"
            bgcolor="main"
            header="Welcome MIT Bad Bank"
            width="38rem"
            body={
            
            <div className="landing">
            <img src={image} style={{width: 300}}></img>
            <div className="align-right">
                <h4><em>"The People Saving Future"</em></h4>
                <h5 className="pushed">Become A Member Today And Experience:</h5>
                <ul>
                    <li className="extra-pushed">Humans Led Operation!</li>
                    <li className="extra-pushed">Financial Accuracy!</li>
                    <li className="extra-pushed"> Engineering Investments Model For the People!</li>
                </ul>
            </div>
            </div>
            
            
            }
       />
    );
}

export default Home;