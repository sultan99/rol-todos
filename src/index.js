import {Provider} from 'react-redux'
import λ from 'react-on-lambda'
import app from 'components/app/with-state'
import dom from 'react-dom'
import store from './redux/store'

const provider = λ(Provider)

dom.render(
  provider({store}, app()),
  document.getElementById(`app`)
)
