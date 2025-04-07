import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUtensils, FaBolt, FaMoneyCheckAlt, FaShoppingCart } from 'react-icons/fa';

const RecentTransactions = ({ transactions }) => {
  // Function to get the appropriate icon based on the transaction category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Groceries':
        return <FaShoppingBag />;
      case 'Dining':
        return <FaUtensils />;
      case 'Utilities':
        return <FaBolt />;
      case 'Income':
        return <FaMoneyCheckAlt />;
      case 'Shopping':
        return <FaShoppingCart />;
      default:
        return <FaMoneyCheckAlt />;
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="transactions-widget">
      <div className="widget-header">
        <h2>Recent Transactions</h2>
      </div>

      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <div className="transaction-icon" style={{ backgroundColor: transaction.type === 'credit' ? '#dcfce7' : '#fee2e2' }}>
              {getCategoryIcon(transaction.category)}
            </div>
            <div className="transaction-details">
              <h4>{transaction.description}</h4>
              <p>{formatDate(transaction.date)} • {transaction.category}</p>
            </div>
            <div className="transaction-amount">
              <span className={transaction.type === 'credit' ? 'text-success' : 'text-danger'}>
                {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="widget-footer">
        <Link to="/transactions" className="btn-text">
          View All Transactions
        </Link>
      </div>
    </div>
  );
};

export default RecentTransactions; 