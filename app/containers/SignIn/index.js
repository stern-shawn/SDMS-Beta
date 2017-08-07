import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors } from 'clientAuth/selectors';
import * as actions from 'clientAuth/actions';
import validate from './validate';

import bulma from 'styles/bulma.scss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={bulma.field}>
    <label className={bulma.label}>{label}</label>
    <div className={`${bulma.control} ${bulma['has-icons-left']}`}>
      <input className={`${bulma.input}`} {...input} type={type} placeholder={label} />
      <span className={`${bulma.icon} ${bulma['is-left']}`}>
        {label === 'Email' && <i className="fa fa-envelope"></i>}
        {label === 'Password' && <i className="fa fa-key"></i>}
      </span>
      {touched && error && <p className={`${bulma.help} ${bulma['is-danger']}`}>{error}</p>}
    </div>
  </div>
);

class SignIn extends Component {
  onSubmit = (values) => {
    // 'values' is an ImmutableJS Map, so we need to retrieve using .get
    const [email, password] = [values.get('email'), values.get('password')];
    this.props.signIn(email, password);
  }

  render() {
    const { handleSubmit, errors } = this.props;

    return (
      <section className={bulma.section}>
        <div className={bulma.container}>
          <div className={`${bulma.columns} ${bulma['is-centered']}`}>
            <div className={`${bulma.column} ${bulma['is-half-desktop']} ${bulma['is-two-thirds-tablet']}`}>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="email" type="text" component={renderField} label="Email" />
                <Field name="password" type="password" component={renderField} label="Password" />

                <div className={`${bulma.field} ${bulma['is-grouped']} ${bulma['is-grouped-centered']}`}>
                  <div className={bulma.control}>
                    <button type="submit" className={`${bulma.button} ${bulma['is-primary']}`}>
                      <span className={bulma.icon}>
                        <i className="fa fa-sign-in" />
                      </span>
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
                { errors && <p className={`${bulma.help} ${bulma['is-danger']}`}>{errors}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
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
