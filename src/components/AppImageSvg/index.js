import React from 'react';
import PropTypes from 'prop-types';
import {SvgCss} from 'react-native-svg';

const AppImageSvg = ({height, width, source}) => {
  return <SvgCss height={height} width={width} xml={source} />;
};
AppImageSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  source: PropTypes.string.isRequired,
};
export default React.memo(AppImageSvg);
