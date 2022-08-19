import React from 'react'

import { InfinitySpin } from 'react-loader-spinner'

import { LoaderContainer } from './loader-styles'

const Loader = () => {
  return (
    <LoaderContainer>
      <InfinitySpin color="gray" />
    </LoaderContainer>
  )
}

export default Loader