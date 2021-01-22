import styled, { css } from 'styled-components'

export const JustifyRowCentered = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ space }) => space && css`
    margin: 2em 1em;
  `}
`

export const InputField = styled.input`
  padding: .5em 1em;
  background-color: #EBEBD3;
  color: #1a1a1a;

  &:focus {
    background: #fff;
    color: #1446A0;
    box-shadow: -2px 4px 5px 0px rgba(202,202,202,0.75);
    -webkit-box-shadow: -2px 4px 5px 0px rgba(202,202,202,0.75);
    -moz-box-shadow: -2px 4px 5px 0px rgba(202,202,202,0.75);
  }
`

export const Button = styled.button`
  padding: .5em 1.5em;
  background: #1446A0;
  color: #fff;
  ${({ mx }) => mx && css`
    margin: 0 ${mx}em;
  `
  }

  &:hover {
    background: #1a1a1a;
    /* background: #ffffff; */
    color: #fff;
    /* color: #1446A0; */
    cursor: pointer;
    box-shadow: -3px 4px 5px 0px rgba(202,202,202,0.75);
-webkit-box-shadow: -3px 4px 5px 0px rgba(202,202,202,0.75);
-moz-box-shadow: -3px 4px 5px 0px rgba(202,202,202,0.75);
  }
`