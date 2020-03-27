import React from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Leftnav from "./../Talkastrologer/leftnav";
import ServiceForm from "../ServiceEnquiry";

const url = "https://www.jyotirvid.in";

class Muhuratsingle extends React.Component {
  state = {
    muhurats: [],
    showForm: false
  };
  async componentDidMount() {
    try {
      const apiUrl = `${url}/api/service/getMuhuratdetails?slug=${this.props.match.params.slug}`;
      const response = await axios.get(apiUrl);
      if (response.data.success) {
        this.setState({
          muhurats: [...this.state.muhurats, ...response.data.data]
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
                  {!this.state.muhurats ? (
                    <p>
                      There isn't any information available for
                      {this.props.match.params.slug}
                    </p>
                  ) : (
                    this.state.muhurats.map(muhurat => (
                      <>
                        <div className="img-text">
                          <img
                            src={require(`../../assets/muhurat/${muhurat.muhurat_image}`)}
                            alt=""
                          />
                          <span>{muhurat.title}</span>
                        </div>

                        <div className="contten-m-v">
                          {ReactHtmlParser(muhurat.description)}
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
export default Muhuratsingle;
