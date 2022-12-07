import { css } from '@linaria/core';

export const CashDataStyles = css`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 50px;

  .bank__cash {
    font-size: 25px;
    width: 100%;
    color: #ffffff;
    box-sizing: border-box;
    padding: 30px;
		display: flex;
    align-items: baseline;
    justify-content: center;
		column-gap: 15px;
    border-radius: 50px;
    background: #6874E8;
    box-shadow:  -15px 15px 35px #4e57ae,
      15px -15px 35px #8291ff;
		
    span {
      font-size: 40px;
    }
  }

  .bank__users {
    font-size: 25px;
    width: 100%;
    color: #ffffff;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 50px;
    background: #6874E8;
    box-shadow:  -15px 15px 35px #4e57ae,
      15px -15px 35px #8291ff;
		
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
  }
`;