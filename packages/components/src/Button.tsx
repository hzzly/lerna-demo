/*
 * @Author: hzzly
 * @Date: 2021-01-18 15:38:05
 * @LastEditors: hzzly
 * @LastEditTime: 2021-01-18 15:41:09
 * @Copyright: hzzly(hjingren@aliyun.com)
 * @Description: description
 */
import React from 'react';

import styled, { css } from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props: ButtonProps) => props.primary && css`
    background: white;
    color: black;
  `}
`;