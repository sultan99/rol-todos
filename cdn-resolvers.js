const moduleToCdn = require(`module-to-cdn`)

const resolve = (name, version) => {
  const list = {
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
