import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Squeak = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;

  a {
    margin-right: 4px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    left: 0;
  }
`
