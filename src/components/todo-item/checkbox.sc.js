import λ from 'react-on-lambda'
import checkMark from './check-mark.sc'
import span from './span.sc'

const input = λ.input`
  display: none;

  &:checked ~ ${checkMark().type} {
    border: 1.2px solid #28a745;
  }

  &:checked ~ ${checkMark().type}:after {
    display: inline-block;
  }

  &:checked ~ ${span().type} {
    color: #989898;
    text-decoration: line-through;
    &:hover {
      color: black;
    }
  }
`

export default input({type: `checkbox`})
