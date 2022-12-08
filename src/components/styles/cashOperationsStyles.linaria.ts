import { css } from '@linaria/core';

export const CashOperationsStyles = css`
  font-size: 20px;
  color: #ffffff;
	height: max-content;
  display: flex;
	overflow: hidden;
  flex-wrap: wrap;
	transition: max-height .3s ease-in-out 0s;

  .cash__actions {
    &__input {
      width: 50%;
      overflow: scroll;
      border-radius: 15px;
			margin: 20px 0 35px;

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
      }
    }

    &__buttons {
      margin: 20px 0 35px;
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
      }
    }
  }
`