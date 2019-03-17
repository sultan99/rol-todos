import React from 'react'
import tags from './tags'

export const extractChilds = (nodes = []) => {
  const children = nodes
    .filter(node => !!node)
    .map(node =>
      typeof node === `function` ? node() : node
    )
  return children.length === 1 ? children[0] : children
}

const createReactElement = (tagName, props, children) => (
  children && children.length
    ? React.createElement(tagName, props, extractChilds(children))
    : React.createElement(tagName, props)
)

const createElement = tagName => (props, ...children) => {
  const isArray = Array.isArray(props)
  const isNode = props && props.$$typeof
  const isProps = props && !isNode && !isArray && typeof props === `object`

  if (isProps && !children.length) {
    return (...childs) => createReactElement(
      tagName, props, extractChilds(childs)
    )
  }
  if (!isProps && children.length) {
    return createReactElement(
      tagName, {children: extractChilds([props, ...children])}
    )
  }
  if (isNode || typeof props === `string`) {
    return React.createElement(
      tagName, null, props
    )
  }
  if (typeof props === `function`) {
    return React.createElement(
      tagName, null, props()
    )
  }
  if (isArray) {
    return React.createElement(
      tagName, null, extractChilds(props)
    )
  }
  if (!props && !children.length) {
    return React.createElement(tagName)
  }
  return createReactElement(
    tagName, props, children
  )
}

const lambda = comp => createElement(comp)

tags.forEach(tag =>
  lambda[tag] = createElement(tag)
)

export default lambda
