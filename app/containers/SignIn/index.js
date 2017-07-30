import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors } from 'clientAuth/selectors';
import * as actions from 'clientAuth/actions';
import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class SignIn extends Component {
  onSubmit = (values) => {
    const [email, password] = [values.get('email'), values.get('password')];
    this.props.signIn(email, password);
  }

  render() {
    const { handleSubmit, errors } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="email" type="text" component={renderField} label="Email" />
        <Field name="password" type="password" component={renderField} label="Password" />

        <button type="submit">Submit</button>
        { errors && <span>{errors}</span> }
      </form>
    );
  }
}

SignIn.propTypes = {
  errors: PropTypes.string,
  handleSubmit: PropTypes.func,
  signIn: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  errors: makeSelectErrors(),
});

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signin',
  validate,
})(SignIn));
