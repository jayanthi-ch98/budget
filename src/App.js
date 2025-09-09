import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useEffect } from "react";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [Description, setDescription] = useState("");
  const [Value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    if (!isOpen && id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const newEntries = [...entries];
      newEntries[index].Description = Description;
      newEntries[index].Value = Value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntries();
    }
  }, [isOpen]);

  useEffect(
    () => {
      var totalIncome = 0;
      var totalExpense = 0;
      entries.map((entry) => {
        if (entry.isExpense) {
          return (totalExpense += Number(entry.Value));
        }
        return (totalIncome += Number(entry.Value));
      });
      setIncome(totalIncome);
      setExpense(totalExpense);
      setTotalBudget(totalIncome - totalExpense);
    },
    [entries],
    []
  );

  const resetEntries = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  const editEntry = (id) => {
    console.log("id", id);
    if (id) {
      const result = entries.find((entry) => entry.id === id);
      console.log("result:", result);

      setDescription(result.Description);
      setValue(result.Value);
      setIsExpense(result.isExpense);
      setIsOpen(true);
      setId(id);
    }
  };
  const addEntry = () => {
    const result = {
      id: entries.length + 1,
      Description: Description,
      Value: Value,
      isExpense: isExpense,
    };
    setEntries(entries.concat(result));
  };
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size="small" Label="Your Balance:" Value={totalBudget} />
      <DisplayBalances income={income} expense={expense} />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <br></br>
      <MainHeader title=" Add New transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        Description={Description}
        Value={Value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dimmer={false}
        Description={Description}
        setDescription={setDescription}
        value={Value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    Description: "Work Income",
    Value: 10000,
    isExpense: false,
  },
  {
    id: 2,
    Description: "Rent",
    Value: 2000,
    isExpense: true,
  },
  {
    id: 3,
    Description: "Electricity Bill",
    Value: 800,
    isExpense: true,
  },
  {
    id: 4,
    Description: "Water Bill",
    Value: 300,
    isExpense: true,
  },
];
