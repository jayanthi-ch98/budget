import React from "react";
import { Segment, Checkbox } from "semantic-ui-react";
import { Form } from "semantic-ui-react";

function EntryForm({
  Description,
  Value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Story Thing"
          value={Description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Form.Input
          icon="rupee"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={Value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is Expense"
          checked={isExpense}
          onChange={() => {
            setIsExpense((prevstate) => !prevstate);
          }}
        ></Checkbox>
      </Segment>
    </>
  );
}

export default EntryForm;
