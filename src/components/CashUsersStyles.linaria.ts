import { css } from '@linaria/core';

export const cashUsersStyles = css`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
  padding: 30px;
  margin-top: 50px;
  border-radius: 50px;
  background: #6874E8;
  box-shadow: -15px 15px 35px #4e57ae,
    15px -15px 35px #8291ff;

	.submitgroup {
    width: 100%;
    display: flex;
    column-gap: 10px;
    margin-top: 10px;
		
    button {
      border: none;
      border-radius: 10px;
      font-size: 15px;
      color: #ffffff;
      width: 50%;
      padding: 10px;

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
	}
	
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
          border: none;
          color: #6874E8;
          padding: 10px;
          font-size: 20px;
          box-sizing: border-box;
          transition: .3s;
          border-radius: 20px;
          background: #ffffff;
        }
      }
    }
		
		&__sort {
			margin-top: 20px;
		}
  }
`;