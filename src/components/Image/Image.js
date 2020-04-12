import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';

import Loading from '../Loading';


const Image = props => (
  <Img
    className={props.className}
    src={props.src}
    loader={props.showLoader && <Loading />}
  />
);

Image.propTypes = {
  showLoader: PropTypes.bool,
};

Image.defaultProps = {
  showLoader: true,
};

export default Image;