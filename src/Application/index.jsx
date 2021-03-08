import React, { useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import GlobalStyles from './GlobalStyles'

import Store from '../Store'

const Heading = styled.h1``

const Application = observer(() => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading>Introduction to MobX State Management</Heading>
        <h3>
          BTC Price: ${Store.price.toFixed(2)} ({Store.dateUpdated?.getHours()}:
          {Store.dateUpdated?.getMinutes()}:{Store.dateUpdated?.getSeconds()})
        </h3>
      </div>
    </>
  )
})

export default Application
