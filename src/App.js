import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Typography, Box, styled, Divider } from '@mui/material';


import Balance from './components/Balance'
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

const Outer = styled(Box)`
background-image: radial-gradient(circle, #d3c8cd, #c2bbc0, #b2adb2, #a3a0a3, #949395, #89888a, #7f7d7f, #747374, #696869, #5f5e5f, #555354, #4b494a);
`
const Header = styled(Typography)`
  margin: 10px 0;
  color: #fff;
  font-size: 36px;
  text-transform: uppercase;
  padding: 2px 10px;
  text-shadow: 3px 3px 2px black;
`;
const Component = styled(Box)`
  background: #fff;
  border-radius: 20px;
  display: flex;
  width: 800px;
  color: black;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
  & > header {
    background-color: black;
  }
  border: rgb(0,0,0,0.5) solid 1px;
  padding: 4px 8px;
`


function App() {

  const [transactions, setTransactions] = useState([
    
  ]);


  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }

  return (
    <Outer className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Divider orientation="vertical" flexItem>

  </Divider>
        <Box>
        <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </Outer>
  );
}

export default App;
