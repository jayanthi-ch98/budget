import React from "react";
import { Container } from "semantic-ui-react";
import Entryline from "./Entryline";

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <Entryline
          key={entry.id}
          entry={entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
