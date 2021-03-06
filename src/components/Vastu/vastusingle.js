import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Leftnav from "./../Talkastrologer/leftnav";
import ServiceForm from "../ServiceEnquiry";

const url = "https://www.jyotirvid.in";

class Vastusingle extends Component {
  state = {
    vastus: [],
    showForm: false
  };
  async componentDidMount() {
    try {
      const apiUrl = `${url}/api/service/getVastudetails?slug=${this.props.match.params.slug}`;
      const response = await axios.get(apiUrl);
      if (response.data.success) {
        this.setState({
          vastus: [...this.state.vastus, ...response.data.data]
        });
      }
    } catch (error) {
      console.error();
    }
  }
  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleServiceEnquiry = data => {
    console.log(data);
  };
  render() {
    return (
      <React.Fragment>
        <section className="padding">
          <div className="container">
            <div className="row">
              <Leftnav />

              <div className="col-md-9">
                <div className="mu-vas-wapp">
                  {!this.state.vastus ? (
                    <p>
                      There isn't any information available for
                      {this.props.match.params.slug}
                    </p>
                  ) : (
                    this.state.vastus.map(vastu => (
                      <>
                        <div className="img-text">
                          <img
                            src={require(`../../assets/vastu/${vastu.vastu_image}`)}
                            alt=""
                          />
                          <span>{vastu.title}</span>
                        </div>

                        <div className="contten-m-v">
                          {ReactHtmlParser(vastu.description)}
                          <button
                            type="button"
                            class="mob-btn"
                            onClick={this.toggleShowForm}
                          >
                            Get an Enquiry
                          </button>
                        </div>
                        <ServiceForm
                          open={this.state.showForm}
                          toggleOpen={this.toggleShowForm}
                          handleServiceEnquiry={this.handleServiceEnquiry}
                        />
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Vastusingle;
