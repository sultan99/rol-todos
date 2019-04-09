const moduleToCdn = require(`module-to-cdn`)

const resolve = (name, version) => {
  const list = {
    'ramda': {
      name: `ramda`,
      var: `R`,
      url: `https://unpkg.com/ramda@${version}/dist/ramda.min.js`,
      version
    },
    'react-on-lambda': {
      name: `react-on-lambda`,
      var: `λ`,
      url: `https://unpkg.com/react-on-lambda@${version}/dist/react-on-lambda.min.js`,
      version
    },
    'styled-components': {
      name: `styled-components`,
      var: `styled`,
      url: `https://unpkg.com/styled-components@${version}/dist/styled-components.min.js`,
      version
    },
  }
  return list[name]
}

module.exports = (name, version, opts) => (
  moduleToCdn(name, version, opts) ||
  resolve(name, version)
)
