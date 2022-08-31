import PropTypes from 'prop-types';

export const Container = ({ children }) => <div>{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
};
