import { css } from '@linaria/core';

export const BankUsersStyles = css`
  font-size: 25px;
  width: 100%;
  color: #ffffff;
  margin-top: 50px;
  max-width: 600px;
  position: relative;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  overflow: hidden;
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
      flex-direction: column;
      column-gap: 20px;
      position: absolute;
      top: 0;
      right: 0;
			transition: .4s;
			height: 100%;
			padding: 40px 40px 40px 20px;
			border-left: 1px solid transparent;

      &__trigger {
        width: 35px;
        height: 35px;
        background-repeat: no-repeat;
      }

			&.open {
				background: #6874E8;
        border-left: 1px solid #ffffff;
			}
			
      .submitgroup {
        width: max-content;
        overflow: hidden;
        row-gap: 10px;
        flex-direction: column;
        transition: margin-right .2s ease-in-out .2s;
        background: transparent;
        margin-right: -101px;
				margin-top: 30px;

        &.open {
          margin-right: -15px;
        }

        button {
          width: 100%;
          background: #ffffff;
          border-radius: 10px;
          background: linear-gradient(145deg, #474ea2, #444c9f);


          &:first-child {
            border-bottom: 1px solid #6874E8;
          }

          &:hover {
            background: #c9cdfd;
          }
        }
      }
    }
  }`;