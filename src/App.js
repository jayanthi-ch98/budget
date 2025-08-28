import { Container, Header, Segment, Statistic, Grid, Icon, Form, Button } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>20000</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Incoming
                </Statistic.Label>
                <Statistic.Value>1045.0</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses
                </Statistic.Label>
                <Statistic.Value>1045.0</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
             <Grid.Column width={3} textAlign="left">
              Rs10
            </Grid.Column>
             <Grid.Column width={3} textAlign="right">
              <Icon name="edit" bordered></Icon>
              <Icon name="trash"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
         <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
             <Grid.Column width={3} textAlign="left">
              Rs100
            </Grid.Column>
             <Grid.Column width={3} textAlign="right">
              <Icon name="edit" bordered></Icon>
              <Icon name="trash"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
         <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
             <Grid.Column width={3} textAlign="left">
              Rs10
            </Grid.Column>
             <Grid.Column width={3} textAlign="right">
              <Icon name="edit" bordered></Icon>
              <Icon name="trash"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">
        Add New transaction
      </Header>
      <Form unstackable>
      <Form.Group>
        <Form.Input 
        icon='tags' width={12} label="Description"
        placeholder="New Story Thing"
        />
        <Form.Input 
        icon='rupee' width={4} label="Value"
        placeholder="100.00"
        iconPosition="left"
        />
      </Form.Group>
      <Button.Group style={{marginTop:20}}>
        <Button>Cancel</Button>
        <Button.Or/>
        <Button primary>Ok</Button>
      </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
