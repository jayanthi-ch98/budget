import React from 'react'
import { Grid,Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                size="tiny"
                Label="Incoming"
                Value="1045.0"
                color="green"
              />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance
                size="tiny"
                Label="Expenses"
                Value="1045.0"
                color="red"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances
