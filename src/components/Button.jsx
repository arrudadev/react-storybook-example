import React from 'react';
import PropTypes from 'prop-types';

export function Button({ label }) {
  return <button type="button">{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Valor Padrão',
};
