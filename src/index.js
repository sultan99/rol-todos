import {Provider} from 'react-redux'
import λ from 'react-on-lambda'
import app from 'components/app/with-state'
import dom from 'react-dom'
import store from './store'

dom.render(
  λ(Provider, {store}, app),
  document.getElementById(`app`)
)
