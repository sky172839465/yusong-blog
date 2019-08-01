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
    this.state = {
      prevVal: ''
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.onChange()
    }, 1000)
  }

  onChange = () => {
    const { prevVal } = this.state
    const selector = this.props.field.get('selector')
    const prefix = this.props.field.get('prefix')
    const ele = document.querySelector(selector)
    const currentPath = ele.value ? _.kebabCase(ele.value) : ''
    const newPostUrl = `${prefix}${currentPath}`
    if (prevVal !== newPostUrl) {
      this.setState({ prevVal: newPostUrl })
      this.props.onChange()
    }
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
