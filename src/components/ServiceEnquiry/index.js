import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";

Modal.setAppElement("#root");

const ServiceEnquiryForm = props => {
  const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: { name: "", email: "", mobile: "", gender: "male" },
    onSubmit: values => {
      props.handleServiceEnquiry(values);
    },
    validationSchema: () =>
      Yup.object().shape({
        name: Yup.string()
          .required("Required")
          .min(3, "Please enter you full name."),
        email: Yup.string()
          .required("Required")
          .email("Please enter a valid email."),
        mobile: Yup.string()
          .required("Required")
          .matches(mobileRegExp, "Please enter valid number.")
      })
  });

  const { loader, error, hasErrored } = props;
  console.log(formik);
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.toggleOpen}
      contentLabel="Example Modal"
    >
      <div style={{ maxWidth: "500px", padding: "20px" }}>
        <div className="model-close-cust" onClick={props.toggleOpen}>
          <i className="fa fa-times"></i>
        </div>

        <h3>Please share the details</h3>
        {hasErrored && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form style={{ padding: "20px" }} onSubmit={formik.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Full Name*"
            className="form-control form-control-l-t"
            name="name"
            style={{ marginBottom: "15px" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div
              style={{
                color: "rgb(235, 54,54)",
                marginTop: "-10px",
                marginBottom: "10px",
                fontSize: "14px"
              }}
            >
              {formik.errors.name}
            </div>
          )}
          <input
            type="email"
            autoComplete="off"
            placeholder="Email*"
            className="form-control form-control-r-t"
            style={{ marginBottom: "15px" }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div
              style={{
                color: "rgb(235, 54,54)",
                marginTop: "-10px",
                marginBottom: "10px",
                fontSize: "14px"
              }}
            >
              {formik.errors.email}
            </div>
          )}
          <input
            type="text"
            autoComplete="off"
            placeholder="Mobile No.*"
            className="form-control form-control-r-t"
            style={{ marginBottom: "15px" }}
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.mobile && formik.touched.mobile && (
            <div
              style={{
                color: "rgb(235, 54,54)",
                marginTop: "-10px",
                marginBottom: "10px",
                fontSize: "14px"
              }}
            >
              {formik.errors.mobile}
            </div>
          )}
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formik.values.gender === "male"}
              onChange={formik.handleChange}
            />
            <label class="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formik.values.gender === "female"}
              onChange={formik.handleChange}
            />
            <label class="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <button
            type="submit"
            class="btn mob-btn btn-block"
            disabled={!formik.dirty || formik.isSubmitting}
            style={{ marginTop: "15px" }}
            onClick={formik.handleReset}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ServiceEnquiryForm;
