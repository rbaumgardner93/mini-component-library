import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

// const Wrapper = styled.div`
//   /* position: relative;
//   width: min-content;
//   color: ${COLORS.gray700};

//   & > div {
//     position: absolute;
//     top: 11px;
//     right: 6px;
//     color: inherit;
//   }

//   &:hover {
//     color: ${COLORS.black};
//   } */
// `;

// const Dropdown = styled.select`
//   color: inherit;
//   width: min-content;
//   appearance: none;
//   padding: 12px 32px 12px 12px;
//   border-radius: 8px;
//   background-color: ${COLORS.gray50};
//   border-color: transparent;
//   cursor: pointer;

//   &:focus {
//     outline-color: ${COLORS.primary};
//   }
// `;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {/* <Icon id="chevron-down" size={20} />
      <VisuallyHidden><label>{label}</label></VisuallyHidden>
      <Dropdown title={displayedValue} value={value} onChange={onChange}>
        {children}
      </Dropdown> */}
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": `${24}px` }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
