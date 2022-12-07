import { css } from '@linaria/core';

export const CashActionsStyles = css`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
	height: max-content;
  padding: 30px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 50px;
  background: #6874E8;
  box-shadow: -15px 15px 35px #4e57ae,
    15px -15px 35px #8291ff;

  .cash__actions {
    &__header {
      width: 100%;
      margin-bottom: 20px;
			border-bottom: 1px solid;
			padding-bottom: 20px;
    }

    &__input {
      width: 50%;
      overflow: scroll;
      border-radius: 15px;

      input {
        border: none;
        height: 100%;
        color: #6874E8;
        padding: 10px;
        font-size: 40px;
        max-width: 100%;
        box-sizing: border-box;
        transition: .3s;
        border-radius: 20px;
        background: #ffffff;

        &:hover,
        &:focus,
        &:focus-visible {
          border: none;
          border-radius: 20px;
        }
      }
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      padding-left: 10px;
      width: calc(50% - 10px);

      button {
        height: 50%;
        width: 100%;
        border-radius: 10px;
        color: #ffffff;
        font-size: 15px;
        transition: .3s;
				border: none;

        &[name='inc'] {
          background: #00B9AE;
        }

        &[name='dec'] {
          background: #e30c5e;
        }

        &:hover,
        &:active {
          background: #000000;
        }
      }
    }
  }
`