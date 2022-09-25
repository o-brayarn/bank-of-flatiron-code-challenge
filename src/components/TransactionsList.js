import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, handleDelete}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transact, key) => {
          return(
            <Transaction date={transact.date} description={transact.description} category={transact.category} amount={transact.amount} key={key} id={transact.id} deleteTransaction={handleDelete} />
          )
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
