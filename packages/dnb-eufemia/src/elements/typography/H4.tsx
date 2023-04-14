/**
 * HTML Element
 *
 */
import React from 'react'
import type { SharedHProps } from './H'
import H from './H'

const H4 = ({ size = 'basis', ...props }: SharedHProps) => (
  <H as="h4" size={size} {...props} />
)

export default H4