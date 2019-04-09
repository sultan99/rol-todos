import checkbox from './checkbox.sc'
import checkMark from './check-mark.sc'
import icoDelete from './ico-delete.sc'
import label from './label.sc'
import span from './span.sc'

const todoItem = ({key, checked, text, onChange, onClick}) => (
  label({key},
    checkbox({checked, onChange}),
    checkMark(),
    span(text),
    icoDelete({onClick}, `💀`)
  )
)

export default todoItem
