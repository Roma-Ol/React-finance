import { css } from '@linaria/core';

export const UserOperationsStyles = css`
  font-size: 20px;
  color: #ffffff;
	max-width: 600px;
	width: 100%;
  padding: 30px;
  margin-top: 50px;
  border-radius: 50px;
  background: #6874E8;
	box-sizing: border-box;
  box-shadow: -15px 15px 35px #4e57ae,
    15px -15px 35px #8291ff;

  .cash__users__header,
  .cash__users__sort__header {
    margin-bottom: 10px;
    border-bottom: 1px solid;
    padding-bottom: 20px;
  }

  .cash__users {
    &__add {
      &__inputgroup {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        margin-top: 20px;

        input {
          width: 100%;
          font-size: 20px;
          border-radius: 20px;
        }
      }
    }

    &__sort {
      margin-top: 20px;
			
			
			
			
    }
  }
`;