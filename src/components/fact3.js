import React, {Component} from "react";
import island from  '../images/niji island.jpg'
class Fact3 extends Component {
    render () {
        return(
           

            <div className="container text-center d-flex justify-content-center box ">
            <img src={island} alt="." className="container text-center d-flex justify-content-center box"/>
                    <div className='card box card-body align-items-center'>
                        <h1>Fact 3</h1>
                        <p>Building your home on haunted lands will cause your domicile to become haunted.</p>
                    </div>
                </div>

        );
    }

}

export default Fact3;