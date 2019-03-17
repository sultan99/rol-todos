import λ from 'react-on-lambda'
import styled from 'styled-components'

const span = styled.span`
  float: right;
  opacity: 0.1;
  text-align: right;

  &:hover {
    opacity: 1;
  }
`

export default λ(span)
