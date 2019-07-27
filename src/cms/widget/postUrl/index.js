import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    classNameWrapper: PropTypes.string.isRequired
  }

  static defaultProps = {
    value: ''
  }

  constructor () {
    super()
    this.timer = null
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.onChange()
    }, 1000)
  }

  onChange = () => {
    const selector = this.props.field.get('selector')
    const prefix = this.props.field.get('prefix')
    const ele = document.querySelector(selector)
    const currentPath = ele.value ? _.kebabCase(ele.value) : ''
    this.props.onChange(`${prefix}${currentPath}`)
  }

  componentDidUnmount () {
    this.timer && clearInterval(this.timer)
  }

  render () {
    const {
      forID,
      classNameWrapper,
      value
    } = this.props

    return (
      <input
        type='text'
        id={forID}
        className={classNameWrapper}
        value={value}
        readOnly
      />
    )
  }
}

export { Control }
