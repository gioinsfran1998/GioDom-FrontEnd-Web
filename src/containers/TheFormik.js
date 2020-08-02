import * as yup from "yup";
import PropTypes from "prop-types";
import React from "react";

import { ErrorMessage, Formik, Form, Field } from "formik";

const validations = yup.object().shape({
  user: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const TheFormik = ({ handleSubmit, initialValues }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validations}
  >
    <Form>
      <div>
        <Field name="user" placeholder="User" type="text" />
        <ErrorMessage component="span" name="user" />
      </div>
      <div>
        <Field name="password" placeholder="Contraseña" type="password" />
        <ErrorMessage component="span" name="password" />
      </div>
      <button type="submit">Login</button>
    </Form>
  </Formik>
);

TheFormik.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default TheFormik;
