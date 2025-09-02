import { Container, Segment, Statistic, Grid, Icon } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import Entryline from "./components/Entryline";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size="small" Label="Your Balance:" Value="2000" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <Entryline Description="Something" Value="Rs 10" isExpense={true} />
      <Entryline
        Description="Something else"
        Value="Rs 100"
        isExpense={false}
      />
      <Entryline Description="Something" Value="Rs 10" isExpense={true} />
      <MainHeader title=" Add New transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
