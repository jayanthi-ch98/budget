import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ income, expense }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              size="tiny"
              Label="Incoming"
              Value={income}
              color="green"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              size="tiny"
              Label="Expenses"
              Value={expense}
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
