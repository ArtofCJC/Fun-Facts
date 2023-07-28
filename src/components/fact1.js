import React, { Component } from "react";
import island from  '../images/niji island.jpg' 
import '../App.css'
class Fact1 extends Component {
    render() {
        return (

                <div className="container text-center d-flex justify-content-center box ">
                    <div className='card box card-body align-items-center bg'>
                    <img src={island} alt="."/>
                        <h1>Fact 1</h1>
                        <p>The lands between Tundurak and Volcana maintain a perfect climate throughout the entire year.</p>
                    </div>
                </div>

        );
    }

}

export default Fact1;