import React,{Component} from 'react';

import './Contact.css';

class Contact extends Component{
  constructor(){
    super();
    this.state = {
      step: 1,
      progress: 0,
    };
  }

  formReset = () => {
    this.setState({
      step: 1,
      progress: 0,
    });
    const firstStepForm = document.querySelector("[data-step='1']");
    const secondStepForm = document.querySelector("[data-step='2']");
    if(firstStepForm)
      firstStepForm.classList.remove('hidden');
    if(secondStepForm)
      secondStepForm.classList.add('hidden');

    const formProgressIndicators = document.querySelectorAll("form-progress-indicator");
    for(var i = 0; i < formProgressIndicators.length; i++){
      console.log("Removing Active Class")
      formProgressIndicators[i].remove('active');
    }
  }

  nextStep = () => {
    if(this.state.step >= 2)
      return;

    var currentStepQuery = "[data-step='" + this.state.step + "']";
    var nextStepQuery = "[data-step='" + (this.state.step + 1) + "']";
    const currentStepForm = document.querySelector(currentStepQuery);
    const nextStepForm = document.querySelector(nextStepQuery);
    console.log(nextStepQuery);
    console.log(nextStepForm.classList);
    if(currentStepForm)
      currentStepForm.classList.add('hidden');
    if(nextStepForm)
      nextStepForm.classList.remove('hidden');

    const formProgressIndicators = document.querySelectorAll("form-progress-indicator");
    for(var i = 0; i < formProgressIndicators.length; i++){
      formProgressIndicators[i].remove('active');
    }
    var nextformProgressIndicatorQuery = "[data-progressindictor='" + (this.state.step + 1) + "']";
    const nextformProgressIndicator = document.querySelector(nextformProgressIndicatorQuery);

    nextformProgressIndicator.classList.add('active');

    this.setState({
      step: this.state.step + 1,
      progress: this.state.progress + 33,
    });
  }

  render(){
    return(
      <div className="contact-page">
        <div className="form-container">
          <div className="container">
            {/*Header*/}
            <div className="row">
              <div className="col form-header">
                <h1>I would love to hear from you! Please drop a note.</h1>
                <hr></hr>
              </div>
            </div>
            {/*Progress Bar*/}
            <div className="row">
              <div className="col form-progress">
                <div className="form-progress">
                  <progress className="form-progress-bar" min="0" max="100" value={this.state.progress}
                            step="33" aria-labelledby="form-progress-completion">
                  </progress>
                  <div className="form-progress-indicator one active" data-progressindictor="1"></div>
              		<div className="form-progress-indicator two" data-progressindictor="2"></div>
              		<div className="form-progress-indicator three" data-progressindictor="3"></div>
              		<div className="form-progress-indicator four" data-progressindictor="4"></div>
                </div>
              </div>
            </div>
            {/*Form Step 1*/}
            <div className="row">
              <div className="col">
                <form action="" name="form-step-1">
                <div className="form-step" data-step="1">
                  <p className="form-instructions"><strong>Please help me with your details</strong></p>


            				<div className="fieldgroup">
            					<input type="text" name="name" id="name" />
            					<label for="name">Name</label>
            				</div>
	                  <div className="fieldgroup">
          					     <input type="text" name="email" id="email" />
          					     <label for="email">Email</label>
          				  </div>
                  </div>

                  <div className="form-step hidden" data-step="2">

                      <p className="form-instructions"><strong>What's up?</strong></p>
                          <div className="fieldgroup">
                              <input type="text" name="token" id="token" />
                              <label for="token">Token</label>
                          </div>

                  </div>

                  <div className="buttons">
                      <button type="button" className="btn btn-alt js-reset" onClick={this.formReset}>Reset</button>
                      <button type="button" className="btn" onClick={this.nextStep}>Continue</button>
                  </div>
			            </form>

                </div>
              </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
