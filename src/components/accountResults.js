import React from 'react';
import Accounts from './accounts.js';

class AccountResults extends React.Component {

  render() {
      return (
          <div className="results_table">
            <Accounts accounts={ this.props.accounts } />
          </div>
        )
    }
}

export default AccountResults