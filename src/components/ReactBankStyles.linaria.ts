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
	
  .actions {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    column-gap: 50px;
  }
`;