import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 32
  }
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`;

const Input = styled.input`
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  border-radius: 0;
  width: var(--width);
  padding-left: var(--height);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 2px;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper style={{
    }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{"--size": styles.iconSize + "px"}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        type="text"
        style={{ 
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize + "px"
        } }
        label={label}
        size={size}
        placeholder={placeholder} />
    </Wrapper>
  )
};

export default IconInput;
