import React from 'react'
import { createPortal } from 'react-dom'

function Message() {
  return createPortal (
    <div>Message</div>
  )
}

export default Message