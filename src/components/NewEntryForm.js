import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveorCancel from "./ButtonSaveorCancel";
import EntryForm from "./EntryForm";
function NewEntryForm({
  addEntry,
  Description,
  Value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Form unstackable>
      <EntryForm
        Description={Description}
        Value={Value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveorCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
