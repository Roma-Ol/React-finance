import { css } from '@linaria/core';

export const CashDataStyles = css`
	position: relative;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 50px;
  background: #6874E8;
  box-shadow: -15px 15px 35px #4e57ae,
    15px -15px 35px #8291ff;

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
		
		&__options {
      max-width: 40px;
      height: 40px;
			position: absolute;
			top: 35px;
      right: 40px;
      background-image: url("/src/icons/transfer.png");
		}
    span {
      font-size: 40px;
    }
  }
`;