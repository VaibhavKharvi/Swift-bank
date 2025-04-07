import React from 'react';
import { FaEye, FaEyeSlash, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AccountSummary = ({ accounts }) => {
  const [showBalances, setShowBalances] = React.useState(true);

  const toggleBalances = () => {
    setShowBalances(!showBalances);
  };

  // Calculate total balance
  const totalBalance = accounts.reduce((sum, account) => {
    // Only add checking and savings to total balance, not credit
    if (account.type !== 'credit') {
      return sum + account.balance;
    }
    return sum;
  }, 0);

  return (
    <div className="account-summary">
      <div className="account-summary-header">
        <h2>Accounts Summary</h2>
        <button className="btn-icon" onClick={toggleBalances}>
          {showBalances ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="account-total">
        <div>
          <p>Total Balance</p>
          <h3>{showBalances ? `$${totalBalance.toFixed(2)}` : '•••••••'}</h3>
        </div>
      </div>

      <div className="accounts-list">
        {accounts.map((account) => (
          <Link to={`/account/${account.id}`} className="account-card" key={account.id}>
            <div className="account-info">
              <h4>{account.name}</h4>
              <p>{account.number}</p>
            </div>
            <div className="account-balance">
              {account.type === 'credit' ? (
                <div>
                  <p>Current Balance</p>
                  <h4 className={showBalances ? 'text-danger' : ''}>
                    {showBalances ? `$${account.balance.toFixed(2)}` : '•••••••'}
                  </h4>
                  <p className="text-small">
                    Limit: {showBalances ? `$${account.limit.toFixed(2)}` : '•••••••'}
                  </p>
                </div>
              ) : (
                <div>
                  <p>Available Balance</p>
                  <h4>
                    {showBalances ? `$${account.balance.toFixed(2)}` : '•••••••'}
                  </h4>
                </div>
              )}
            </div>
            <div className="account-action">
              <FaChevronRight />
            </div>
          </Link>
        ))}
      </div>

      <div className="account-summary-footer">
        <Link to="/accounts" className="btn btn-secondary">View All Accounts</Link>
      </div>
    </div>
  );
};

export default AccountSummary; 