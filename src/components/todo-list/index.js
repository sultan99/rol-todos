import todoItem from 'components/todo-item'
import wrapper from './wrapper.sc'

const todoList = (data, toogle, remove) => !!data.length && (
  wrapper(
    data.map(item =>
      todoItem({
        key: item.key,
        checked: item.done,
        text: item.text,
        onChange: toogle(item.key),
        onClick: remove(item.key)
      })
    )
  )
)

export default todoList
