import React from 'react';
import { translate } from 'react-i18next';


class ErrorResults extends React.Component {

  render() {
      return (
          <div className="results_table">
            <h1>{ this.props.t('translations.oops', { framework: "react-i18next" }) }</h1>
            <p>{ this.props.t('translations.oops_one', { framework: "react-i18next" }) }</p>
            <p>{ this.props.t('translations.oops_two', { framework: "react-i18next" }) }</p>
          </div>
        )
    }
}

//export default ErrorResults
export default translate('common')(ErrorResults); 