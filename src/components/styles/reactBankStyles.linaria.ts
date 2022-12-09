import { css } from '@linaria/core';

export const ReactBankStyles = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #6874E8;
  height: 100vh;
  width: 100vw;
  margin: -8px;
  font-family: Arial, serif;

  .submitgroup {
    width: 100%;
    display: flex;
    column-gap: 10px;
    margin-top: 10px;
  }

  button {
    border: none;
    border-radius: 10px;
    font-size: 15px;
    color: #ffffff;
    width: 50%;
    padding: 10px;
    cursor: pointer;
		transition: .4s;
		background: no-repeat center;
		background-size: cover;
    rotate: 0;

    &.open {
      rotate: 180deg;
    }

    &:hover,
    &:active {
      opacity: .8;
    }

    &[name='add'] {
      background: #00B9AE;
    }

    &[name='remove'] {
      background: #e30c5e;
    }

    &[name='sort by cash'],
    &[name='sort by name'] {
      background: #00B9AE;
    }
  }

  input {
    border: none;
    padding: 10px;
    box-sizing: border-box;
    transition: .3s;
    color: #6874E8;
    background: #ffffff;
    -moz-appearance: textfield;

    &:hover,
    &:focus,
    &:focus-visible {
      outline: unset;
      border: none;
      border-radius: 20px;
      opacity: .8;
    }

    &.invalid {
      background: #ffc3c3;
    }
		
		// Rm arrows for num.
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;