import React,{Component} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import './Contact.css';
import Error from './Error'
class Contact extends Component{
  constructor(){
    super();
    this.state = {
      step: 1,
      progress: 0,
      trust: false,
      nameError: false,
      emailError: false,
      messageError: false,
    };
  }

  loadInitialState = () => {
    this.setState({
      step: 1,
      progress: 0,
      trust: false,
      nameError: false,
      emailError: false
    });
  }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  formReset = () => {
    this.loadInitialState();
    const firstStepForm = document.querySelector("[data-step='1']");
    const secondStepForm = document.querySelector("[data-step='2']");
    if(firstStepForm){
      firstStepForm.classList.remove('hidden');
    }

    if(secondStepForm){
      secondStepForm.classList.add('hidden');
    }

    const formProgressIndicators = document.querySelectorAll(".form-progress-indicator");
    for(var i = 0; i < formProgressIndicators.length; i++){
      formProgressIndicators[i].classList.remove('active');
      formProgressIndicators[i].classList.remove('completed');
    }

    document.querySelector("[data-progressindictor='1'").classList.add('active');

  }

  nextStep = () => {
    if(this.state.step >= 3)
      return;

    if(this.state.step === 1){
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      if(!name || !email){
        this.props.history.push({pathname: '/InternalError'});
        return;
      }
      if(!name.value || name.value === "" || name.value.length < 4 || name.value.length > 20){
        this.setState({
          nameError: true,
        });
        return;
      }
      else{
        this.setState({
          nameError: false,
        });
      }
      if(!email.value || !this.validateEmail(email.value)){
        this.setState({
          emailError: true,
        });
        return;
      }
      else{
        this.setState({
          emailError: false,
        });
      }
    }

    if(this.state.step === 2){
      const message = document.getElementById("message");
      if(!message){
        this.props.history.push({pathname: '/InternalError'});
        return;
      }
      if(!message.value || message.value === "" || message.value.length < 4){
        this.setState({
          messageError: true,
        });
        return;
      }
      else{
        this.setState({
          messageError: false,
        });
      }
    }

    var currentStepQuery = "[data-step='" + this.state.step + "']";
    var nextStepQuery = "[data-step='" + (this.state.step + 1) + "']";
    const currentStepForm = document.querySelector(currentStepQuery);
    const nextStepForm = document.querySelector(nextStepQuery);
    if(currentStepForm){
      currentStepForm.classList.add('hidden');
    }

    if(nextStepForm)
      nextStepForm.classList.remove('hidden');

    var currentformProgressIndicatorQuery = "[data-progressindictor='" + this.state.step + "']";
    var nextformProgressIndicatorQuery = "[data-progressindictor='" + (this.state.step + 1) + "']";
    const currentformProgressIndicator = document.querySelector(currentformProgressIndicatorQuery);
    const nextformProgressIndicator = document.querySelector(nextformProgressIndicatorQuery);

    currentformProgressIndicator.classList.add('completed');
    nextformProgressIndicator.classList.add('active');

    this.setState({
      step: this.state.step + 1,
      progress: this.state.progress + 50,
    });
  }

  captchaSuccess = () => {
    console.log("Captcha is Successful.")
    this.setState({
      trust: true
    })
  }

  render(){
    return(
      <div className="contact-page">
        <div className="form-container">
          <div className="container form">
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
                            step="50" aria-labelledby="form-progress-completion">
                  </progress>
                  <div className="form-progress-indicator one active" data-progressindictor="1"></div>
              		<div className="form-progress-indicator two" data-progressindictor="2"></div>
              		<div className="form-progress-indicator three" data-progressindictor="3"></div>
                </div>
              </div>
            </div>

            <br></br>

            <div className="row">
              <div className="col">
                {/*Form Step 1*/}
                <form action="" name="form-step-1">
                <div className="form-step" data-step="1">

                  <p className="form-instructions"><strong>Please help me with your details</strong></p>

			            <div className="fieldgroup">
          					<input type="text" name="name" id="name" placeholder="I'm Parardha, and you are?"/>
          					<label>

                    {this.state.nameError ?
                      <Error errorMessage="Let Your True Self Be Known!"/>
                      :
                      "Name"
                    }

                    </label>
          				</div>
                  <div className="fieldgroup">
        					     <input type="text" name="email" id="email" placeholder="I'll respond back on this mail id"/>
                       {this.state.emailError ?
                         <Error errorMessage="Please help me with your correct email id for me to reply."/>
                         :
                         "Email Id"
                       }
        				  </div>
                </div>

                  {/*Form Step 2*/}
                  <div className="form-step hidden" data-step="2">
                      <p className="form-instructions">
                        {this.state.messageError ?
                          <Error errorMessage="Don't be shy, say something."/>
                          :
                          <strong>What's up?</strong>
                        }
                      </p>
                      <div className="fieldgroup">
                          <textarea id="message" name="message" rows="10" cols="50">
                          </textarea>
                      </div>
                  </div>

                  {/*Form Step 3*/}
                  <div className="form-step hidden" data-step="3">
                      <p className="form-instructions"><strong>I hate to do captchas too, but this helps me stay safe against Spammers!</strong></p>
                                {window.screen.width > 780 ?
                                  <ReCAPTCHA
                                  style={{ display: "inline-block" }}
                                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                  theme="dark"
                                  onChange={this.captchaSuccess}/>
                                  :
                                  <ReCAPTCHA
                                  style={{ display: "inline-block" }}
                                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                  theme="dark"
                                  onChange={this.captchaSuccess}
                                  size="compact"/>
                                }
                  </div>

                  <div>
                      {this.state.step === 3 ?
                        <div>
                          {this.state.trust ? <button type="submit" className="btn">Submit</button>
                          : ""
                          }

                        </div>
                        :
                        <div className="buttons">
                        <button type="button" className="btn btn-alt js-reset" onClick={this.formReset}>Reset</button>
                        <button type="button" className="btn" onClick={this.nextStep}>Continue</button>
                        </div>

                      }

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
