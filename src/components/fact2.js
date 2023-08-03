import React, {Component} from "react";
import island from  '../images/niji island.jpg'
class Fact2 extends Component {


    render () {
        return(
          

            <div className="container text-center d-flex justify-content-center box ">
                    <img src={island} alt="." className="container text-center d-flex justify-content-center box"/>
                    <div className='card box card-body align-items-center'>
                        <h1>Fact 2</h1>
                        <p>Smelting or using a magical heat source will create magical alloys and metals.. Requires metallurgy 4</p>
                    </div>
                </div>

        );
    }
}

export default Fact2;