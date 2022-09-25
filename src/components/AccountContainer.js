import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

const [transactions, setTransactions] = useState([])
function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then(setTransactions);
}

useEffect(fetchTransactions, [])

function handleDelete(id) {
    const updateTransactions = transactions.filter(transaction => {
      return transaction.id !== id
    })
    setTransactions(updateTransactions)
}

function handleAdd(transaction){
  setTransactions([...transactions, transaction])
}

function handleSearch(search){
  if (search === ''){
    fetchTransactions(transactions)
  } else {
 
  const searchTransactions = transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(search.toLowerCase())
  })
  setTransactions(searchTransactions) }
}



  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleAdd={handleAdd} />
      <TransactionsList transactions={transactions} handleDelete={handleDelete} />
    </div>
  );
}

export default AccountContainer;
