import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../config/routes";
import config from "../../config/config";
class Astrologer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astrolist: [],
      loading: false,
      success: "",
      error: ""
    };
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }
  componentDidMount() {
    this.getAstrologerlist();
  }
  handleDeleteRow(rowId) {
    var r = window.confirm("Are You sure. Do you want to delete astrologer");
    if (r == true) {
      this.setState({
        loading: true
      });

      config
        .get("/api/astro/deleteAstro?id=" + rowId, {
          withCredentials: false
        })
        .then(res => {
          this.setState({ loading: false });
          if (res.data.success) {
            this.setState({
              loading: false,
              success: "Astrologer deleted Successully"
            });
            this.getAstrologerlist();
          } else {
            this.setState({
              loading: false,
              error: res.data.message
            });
          }
        })
        .catch(error => {
          if (error.response) {
            this.setState({
              loading: false,
              error: error.response.data.message
            });
          } else if (error.request) {
            this.setState({
              loading: false,
              error: error.message
            });
          }
        });
    }
  }
  getAstrologerlist() {
    this.setState({
      loading: false
    });

    config
      .get("/api/astro/getAstrologerlist", {
        withCredentials: false
      })
      .then(res => {
        this.setState({ loading: false });
        if (res.data.success) {
          this.setState({
            loading: false,
            error: "",
            astrolist: res.data.result
          });
        } else {
          this.setState({
            loading: false,
            error: res.data.message
          });
        }
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            loading: false,
            error: error.response.data.message
          });
        } else if (error.request) {
          this.setState({
            loading: false,
            error: error.message
          });
        }
      });
  }
  render() {
    let { astrolist, loading, success, error } = this.state;
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Welcome Astrologer</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Home</li>
                </ul>
              </div>

              <div className="col-sm-5 col">
                <Link
                  to={ROUTES.addAstrologer}
                  className="btn btn-primary float-right mt-2"
                >
                  Add
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    {loading && (
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    )}
                    {success && (
                      <div className={"alert alert-success"}>{success}</div>
                    )}
                    {error && (
                      <div className={"alert alert-danger"}>{error}</div>
                    )}
                    {astrolist.length > 0 && (
                      <table className="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th>User Type</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status </th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {astrolist.map((rowData, index) => (
                            <tr key={index + 1}>
                              <td>{index + 1}</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="#" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="/static/media/avatar-01.b3a5c318.jpg"
                                      alt="User"
                                    />
                                  </a>
                                  <a href=""></a>
                                </h2>
                              </td>
                              <td>Astrologer</td>

                              <td>{rowData.name}</td>
                              <td>{rowData.email}</td>
                              <td>Active</td>
                              <td>
                                <Link
                                  to={""}
                                  className="btn btn-xs btn-primary"
                                >
                                  Edit
                                </Link>
                                &nbsp;&nbsp;
                                <Link
                                  className="btn btn-xs btn-danger"
                                  onClick={i =>
                                    this.handleDeleteRow(rowData.id)
                                  }
                                >
                                  Trash
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Astrologer;
