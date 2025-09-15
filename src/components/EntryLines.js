import React from "react";
import { Container } from "semantic-ui-react";
import Entryline from "./Entryline";

function EntryLines({ entries, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <Entryline key={entry.id} entry={entry} editEntry={editEntry} />
      ))}
    </Container>
  );
}

export default EntryLines;
