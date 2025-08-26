import React, { useState, useEffect } from 'react';
import './ExpenseTracker.css';

const App = () => {
  // Initialize state with data from localStorage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Use a useEffect hook to save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert('Please enter a description and amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };

    setExpenses([newExpense,...expenses]);
    setDescription('');
    setAmount('');
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="expense-tracker-container">
      <h2>💸 Expense Tracker</h2>
      <form onSubmit={handleAddExpense} className="expense-form">
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <div className="expenses-list-container">
        <h3>📝 Expenses List</h3>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul className="expenses-list">
            {expenses.map((expense) => (
              <li key={expense.id} className="expense-item">
                <div>
                  <span className="expense-date">{expense.date}</span>
                  <span className="expense-description">{expense.description}</span>
                  <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
                </div>
                <button onClick={() => handleDeleteExpense(expense.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="total-expenses">
        <h3>📊 Total Expenses:
          <span>₹{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
};

export default App;
