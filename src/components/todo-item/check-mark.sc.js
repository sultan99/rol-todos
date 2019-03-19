import λ from 'react-on-lambda'

const checkMark = λ.span`
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: middle;
  width: 24px;

  &:after {
    border-color: #28a745;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: "";
    display: none;
    height: 10px;
    left: 7px;
    position: absolute;
    top: 3px;
    transform: rotate(45deg);
    width: 6px;
  }
`

export default checkMark
