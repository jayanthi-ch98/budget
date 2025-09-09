import { React } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
function Entryline(props) {
  const {
    entry: { id, Description, Value, isExpense = false },
    deleteEntry,
    editEntry,
  } = props;
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {Description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="left">
              {Value}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Icon name="edit" onClick={() => editEntry(id)} bordered></Icon>
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Entryline;
