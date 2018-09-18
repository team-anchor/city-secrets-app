import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormControl extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.element
  };

  render() {
    const { label, children } = this.props;
    return (
      <section>
        {label &&
          <label>{label}: </label>
        }
        <section>
          {children}
        </section>
      </section>
    );
  }
}
 
export default FormControl;