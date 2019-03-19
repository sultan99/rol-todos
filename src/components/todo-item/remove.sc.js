import λ from 'react-on-lambda'

const span = λ.span`
  float: right;
  opacity: 0.1;
  text-align: right;

  &:hover {
    opacity: 1;
  }
`

export default span
