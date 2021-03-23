/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--padding": 0,
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--padding": 0,
    "--height": "16px",
    "--borderRadius": "4px"
  },
  large: {
    "--padding": "4px",
    "--height": "32px",
    "--borderRadius": "8px"
  }
}

const Wrapper = styled.div`
  background-color: ${COLORS.gray15};
  height: var(--height);
  width: 300px;
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Bar = styled.div`
  height: 100%;
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  
  return(
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
     >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
