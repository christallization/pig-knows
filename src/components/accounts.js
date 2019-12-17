import React from 'react';
import { translate } from 'react-i18next';

const Accounts = ({ isLoading, accounts, t }) => {

    return (

        <div className="table account_header">
          <h3 className='text-center'>{ t('translations.active_personas', { framework: "react-i18next" }) }</h3>
          <table className="account_table">
          <thead>
            <tr>
              <th>{ t('translations.id', { framework: "react-i18next" }) }</th>
              <th>{ t('translations.name', { framework: "react-i18next" }) }</th>
            </tr>
          </thead>
          <tbody>
          {
            accounts.map(function(account, index){
              return <tr key={index}>
                <td>{account.id}</td>
                <td>{account.name.first} {account.name.last}</td>
                </tr>;
            })
          }
          </tbody>
          </table>

        </div>
          
    );
  
}

export default translate('common')(Accounts); 