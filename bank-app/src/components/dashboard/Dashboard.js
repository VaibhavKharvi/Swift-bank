import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaExchangeAlt, FaCreditCard, FaChartLine, FaBell, FaUserCircle } from 'react-icons/fa';
import AccountSummary from './AccountSummary';
import RecentTransactions from './RecentTransactions';
import SpendingChart from './SpendingChart';

const Dashboard = () => {
  // Dummy data for demonstration
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Checking Account',
      number: '****4532',
      balance: 5240.75,
      currency: 'USD',
      type: 'checking',
    },
    {
      id: 2,
      name: 'Savings Account',
      number: '****7865',
      balance: 12750.42,
      currency: 'USD',
      type: 'savings',
    },
    {
      id: 3,
      name: 'Credit Card',
      number: '****1234',
      balance: 320.50,
      currency: 'USD',
      type: 'credit',
      limit: 5000,
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2023-03-26',
      description: 'Grocery Store',
      amount: -120.50,
      type: 'debit',
      category: 'Groceries',
    },
    {
      id: 2,
      date: '2023-03-25',
      description: 'Salary Deposit',
      amount: 3500.00,
      type: 'credit',
      category: 'Income',
    },
    {
      id: 3,
      date: '2023-03-24',
      description: 'Electric Bill',
      amount: -85.20,
      type: 'debit',
      category: 'Utilities',
    },
    {
      id: 4,
      date: '2023-03-23',
      description: 'Restaurant',
      amount: -56.75,
      type: 'debit',
      category: 'Dining',
    },
    {
      id: 5,
      date: '2023-03-21',
      description: 'Online Store',
      amount: -99.99,
      type: 'debit',
      category: 'Shopping',
    },
  ]);

  const [notifications, setNotifications] = useState(3); // Number of unread notifications

  return (
    <div className="dashboard">
      <div className="container">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome, John</h1>
            <p className="text-muted">Here's your financial summary</p>
          </div>
          <div className="dashboard-actions">
            <div className="notifications">
              <FaBell size={20} />
              {notifications > 0 && <span className="notification-badge">{notifications}</span>}
            </div>
            <div className="user-profile">
              <FaUserCircle size={24} />
              <span>John Doe</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <Link to="/transfer" className="quick-action-card">
            <div className="quick-action-icon">
              <FaExchangeAlt />
            </div>
            <span>Transfer</span>
          </Link>
          <Link to="/pay-bills" className="quick-action-card">
            <div className="quick-action-icon">
              <FaWallet />
            </div>
            <span>Pay Bills</span>
          </Link>
          <Link to="/cards" className="quick-action-card">
            <div className="quick-action-icon">
              <FaCreditCard />
            </div>
            <span>Cards</span>
          </Link>
          <Link to="/investments" className="quick-action-card">
            <div className="quick-action-icon">
              <FaChartLine />
            </div>
            <span>Investments</span>
          </Link>
        </div>

        {/* Account Summary Component */}
        <AccountSummary accounts={accounts} />

        {/* Dashboard Main Content */}
        <div className="dashboard-main">
          <div className="dashboard-column">
            <RecentTransactions transactions={transactions} />
          </div>
          <div className="dashboard-column">
            <SpendingChart transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 