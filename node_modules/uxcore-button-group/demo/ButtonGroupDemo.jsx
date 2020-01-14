/**
 * ButtonGroup Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react'
import Button from 'uxcore-button'
import ButtonGroup from '../src'
import 'kuma-base/core.less'
import '../style'

class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      maxLength: 1
    }
  }

  render () {
    return (
      <div>
        <ButtonGroup separated>
          {null}
          <Button danger type='outline' >
        Left
          </Button>
          <Button >
        Middle
          </Button>
          <Button>
        Right
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

module.exports = Demo
