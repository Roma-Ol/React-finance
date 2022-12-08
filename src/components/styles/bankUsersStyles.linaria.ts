import { css } from '@linaria/core';

export const BankUsersStyles = css`
  font-size: 25px;
  width: 100%;
  color: #ffffff;
  margin-top: 50px;
  max-width: 600px;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  background: #6874E8;
  box-shadow: -15px 15px 35px #4e57ae,
    15px -15px 35px #8291ff;

  .bank__users {
    &__header,
    &__user {
      display: flex;

      & > div {
        width: 50%;
      }
    }

    &__header {
      padding-bottom: 15px;
    }

    &__user {
      font-size: 20px;
      padding: 10px 0 10px;
      border-top: 1px solid #ffffff;
    }

    &__sort {
      display: flex;
			align-items: flex-end;
			column-gap: 20px;
			
      .submitgroup {
        width: max-content;
      }

      button {
        max-width: 100px;
      }
    }
  }`;