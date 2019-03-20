import λ from 'react-on-lambda'

const input = λ.input`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
  color: #495057;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 20px;
  transition: border-color .15s;
  width: 100%;

  &::placeholder {
    color: #d5d9dd;
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.1);
    outline: 0;
  }
`

export default input
