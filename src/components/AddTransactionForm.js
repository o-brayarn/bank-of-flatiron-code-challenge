import React from "react";

function AddTransactionForm({handleAdd}) {

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }
    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(() => {
      return handleAdd(newTransaction)
    })

    handleAdd(newTransaction)
    e.target.reset();

  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
