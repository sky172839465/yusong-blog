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
      value: ''
    }
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
    this.setState({ value: `${prefix}${_.kebabCase(ele.value)}` })
  }

  componentDidUnmount () {
    this.timer && clearInterval(this.timer)
  }

  render () {
    const {
      forID,
      classNameWrapper
    } = this.props
    const { value } = this.state

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
