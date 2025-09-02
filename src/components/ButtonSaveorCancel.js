import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveorCancel() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
  )
}

export default ButtonSaveorCancel
