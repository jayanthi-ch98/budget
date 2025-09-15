import { React } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteEntryReducer } from "./actions/entries.actions";
function Entryline(props) {
  const {
    entry: { id, Description, Value, isExpense = false },
    editEntry,
  } = props;
  const dispatch = useDispatch();
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
              <Icon
                name="trash"
                onClick={() => dispatch(deleteEntryReducer(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Entryline;
