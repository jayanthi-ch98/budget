import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveorCancel from './ButtonSaveorCancel'

function NewEntryForm() {
  return (
    <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="Description"
            placeholder="New Story Thing"
          />
          <Form.Input
            icon="rupee"
            width={4}
            label="Value"
            placeholder="100.00"
            iconPosition="left"
          />
        </Form.Group>
       <ButtonSaveorCancel/>
      </Form>
  )
}

export default NewEntryForm
