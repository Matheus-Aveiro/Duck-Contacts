import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #ffd32a;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
