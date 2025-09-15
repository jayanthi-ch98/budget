import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveorCancel from "./ButtonSaveorCancel";
import EntryForm from "./EntryForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntryReducer } from "./actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
function NewEntryForm({}) {
  const [Description, setDescription] = useState("");
  const [Value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);
  const addEntry = () => {
    dispatch(
      addEntryReducer({
        id: uuidv4(),
        Description: Description,
        Value: Value,
        isExpense: isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  };
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
