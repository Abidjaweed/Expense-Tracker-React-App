import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTrasaction } from './components/AddTrasaction';
import { Footer } from './components/Footer'


import { GlobalProvider } from './context/GlobalState'


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTrasaction />
      <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
