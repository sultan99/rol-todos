import checkMark from './check-mark.sc'
import input from './input.sc'
import label from './label.sc'
import span from './span.sc'
import remove from './remove.sc'

const todoItem = ({key, checked, text, onChange, onRemove}) => (
  label({key},
    input({type: `checkbox`, checked, onChange}),
    checkMark,
    span(text),
    remove({onClick: onRemove}, `💀`)
  )
)

export default todoItem
