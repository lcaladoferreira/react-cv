import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const email = this.props.data.email;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">


        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              
                <fieldset>
                  <div><a href="https://wa.me/5511987766080">
                    <button className="fa-whatsapp">
                      click here to send me a message
                    </button>
                    </a>
                    <span id="image-loader">
                      <img alt="whatsapp" className="fa fa-whatsapp" src="images/loader.gif" />
                    </span>
                  </div>
                  <div>
                  </div>
                </fieldset>
             
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>My Contacts</h4>
                <p className="address">
                  {name}
                  <br />
                  {email} 
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
