import React, { Component } from 'react';
import Group from '../Acoustics/img/Group.png';

export default class Feedback extends Component {
    render() {
        return (
            <div>

                <section >
                    <div class="container">
                        <div class="row align-items-end justify-content-center">
                            <div class="col-lg-9">
                                <div class="main_title">
                                    <h3 style={{ color: "tomato", textAlign: "center", paddingTop: "10%" }}>Client's feedback</h3>
                                    <h1 style={{ textAlign: "center" }}>People say's about us !</h1>
                                    <div class="col-lg-12">
                                        {/* <svg style={{ opacity: "1000" }} xmlns="http://www.w3.org/2000/svg"
                                            width="63.999" height="45.176" viewBox="0 0 63.999 45.176"><defs>
                                                <style>.a{fill = "#cbe5fc"}</style></defs><g
                                                    transform="translate(-0.001 -9.412)"><path class="a"
                                                        d="M50.629,26.226c-.129-1.393-.03-5.182,3.6-10.449a1,1,0,0,0-.116-1.274c-1.479-1.479-2.4-2.413-3.038-3.066-.845-.861-1.23-1.254-1.795-1.766a1,1,0,0,0-1.328-.013,38.326,38.326,0,0,0-12.334,30.81c.6,8.182,6.563,14.12,14.189,14.12a14.193,14.193,0,0,0,.823-28.362Zm-.823,26.362c-6.549,0-11.677-5.158-12.2-12.265h0C36.467,24.652,45.783,14.473,48.6,11.778c.274.271.588.589,1.05,1.059.557.566,1.318,1.342,2.471,2.5-4.405,6.787-3.574,11.623-3.21,12.316a1.036,1.036,0,0,0,.9.551,12.193,12.193,0,1,1,0,24.386Z" />
                                                <path class="a" d="M15.114,26.226c-.13-1.39-.034-5.175,3.6-10.449A1,1,0,0,0,18.6,14.5c-1.477-1.477-2.392-2.409-3.033-3.062-.848-.863-1.234-1.257-1.8-1.77a1,1,0,0,0-1.328-.014A38.332,38.332,0,0,0,.1,40.468h0C.7,48.65,6.665,54.588,14.291,54.588a14.193,14.193,0,0,0,.822-28.362Zm-.822,26.362c-6.548,0-11.679-5.158-12.2-12.266h0C.953,24.649,10.268,14.472,13.082,11.778c.275.271.59.591,1.053,1.063.556.566,1.316,1.341,2.467,2.5-4.405,6.788-3.574,11.623-3.21,12.315a1.038,1.038,0,0,0,.9.552,12.193,12.193,0,1,1,0,24.386Z" /></g></svg><center>
                                                    <p style={{textAlign: "justify", color: "black",  fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:"18px"}}>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                                                    Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                        </center><p style={{ color: "#FF3147", fontWeight: "bold", fontSize: "18px", paddingTop: "2%" }}>JANNAT TUMPA</p><span style={{ fontSize: "15px", color: "grey", fontWeight: "500" }}>- COO, AMERIMAR ENTERPRISES, INC.</span>*/}  <br />	</div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <center>


                    <div class="container" style={{background: "#FF3147 no-repeat center center fixed", 

                        backgroundSize: "cover",
                        maxWidth: "100%",
                        height: "auto"}}>
                        <center><img src={Group} style={{ width: "100%", padding: "3% 15%" }} /></center>
                    </div>
                </center>
            </div>

        );
    }
}
