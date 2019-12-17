import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import AccountResults from './components/accountResults.js';
import NewAccount from './components/newAccount.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

class App extends Component {

  state = {
    lang: 'en-us',
    //urlLocaleMatch: '',
    accounts: [],
    posts: [],
    f_name: '',
    l_name: '',
    interests: '',
    location: '',
    initialSubmission: false,
    formerror: '',
    isLoading: true,
    errors: null,
    resultType: '',
    dataPage: '1'
  };

  //urlLocaleMatch = window.location.search.match(/locale=(en-us|en-ca|fr-ca)/i);
  if (urlLocaleMatch) {
      this.setState({ lang: urlLocaleMatch[1].toLowerCase() });
  }

  getAccounts(page, size) {
    let url = `https://5d730a5c214da600148f5427.mockapi.io/api/personas?page=${page}&limit=${size}`;
    //console.log('Get Accounts URL posted');
    //console.log(url);

    axios({
        url: url
    }).then(response => {

      this.setState({
        accounts: response.data,
        isLoading: false,
        resultType: 'getAccounts',
        dataPage: page
      }, () => { 
        console.log( this.state.dataPage );
      });

    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  getMore = (page, size) => {
    this.getAccounts(page, size);
  }

  putAccount = (f_name, l_name, interests, location) => {
    let url = this.processPutAccount(f_name, l_name, interests, location);
    //console.log('Final URL posted');
    //console.log(url);

    axios({
      url: url,
      adapter: jsonpAdapter,
      callbackParamName: 'c' // optional, 'callback' by default
    }).then(response => {
      if (response.data === null) {
        this.setState({
          isLoading: false,
          responseView: '404Response' // Todo
        });
      } else {
        this.setState({
          // Todo
        });
      }
    })
    .catch(error => this.setState({ error, isLoading: false, isValidResponse: false }));
  }

  processPutAccount = (f_name, l_name, interests, location) => {
    let path = "https://5d730a5c214da600148f5427.mockapi.io/api/personas" 
    let url = path + `/first_name=${f_name}?last_name=${l_name}&interests=${interests}&location=${location}`;

    let params = [];

    if (interests) {
      params.push(""); // ToDo massage interested into nested objects etc whatever the API needs.
    }

    return params.length ? url + "?" + params.join("&") : url;
  }

  checkEntry = (str) => {
    return str === null || str.match(/^ *$/) !== null;
  }

  clearForm = () => { 
    document.getElementById('profile_form').reset();
    this.setState({
      f_name: '',
      l_name: '',
      interests: '',
      location: '',
      responseView: '',
      pintAvail: false,
      initialSubmission: false 
    });
  } 

  handleChange = (data) => {
    let inputname = data.target.name;
    console.log(inputname);
    switch(inputname) {
      case "f_name": {
          this.setState({ formerror: '' });
          this.setState({
            f_name: data.target.value  
          }, () => { 
            //
          });
        break;
      }
      case "l_name": {
          this.setState({ formerror: '' });
          this.setState({
            l_name: data.target.value  
          }, () => { 
            //
          });
        break;
      }
      case "interests": {
        this.setState({ formerror: '' });
        this.setState({
          interests: data.target.value  
        }, () => { 
          //
        });
      break;
    }
    case "location": {
        this.setState({ formerror: '' });
        this.setState({
          location: data.target.value  
        }, () => { 
          //
        });
      break;
  }
      default: {
        break;
      }
    }
  }

  onFormSubmit = () => {
    if ( ( this.state.f_name.length > 1 )  && ( this.state.l_name.length > 1 ) && ( this.state.location.length > 1 ) ) {

      if ( ( this.checkEntry(this.state.f_name) ) || ( this.checkEntry(this.state.l_name) ) || ( this.checkEntry(this.state.location) ) ) {
        this.setState({ formerror: 'translations.error_space' });
      } else {
        this.putAccount(this.state.f_name, this.state.l_name, this.state.interests, this.state.location)
        this.setState({ formerror: '' });
      }

    } else {
      this.setState({ formerror: 'translations.error_post_min' });
    }
  }

  componentDidMount() {
    this.getAccounts(1,10);
    console.log( this.state.accounts );
  }

  render() {

    //const { i18n } = this.props;

    let resultsBlock;
    let resultType = this.state.resultType;
    switch(resultType) { 
      case "getAccounts": { 
          resultsBlock = <AccountResults accounts={ this.state.accounts } />;
          break; 
      } 
      default: { 
        break;              
      }
    }

    return (
      <div className="app">

        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-sm-5 profile-column">
                    <div className="col-sm-12 text-center"><h2>{ this.props.t('translations.new_profile', { framework: "react-i18next" }) } </h2></div>
                    <div className="form-group row mt-3">
                        <NewAccount
                            f_name={ this.state.f_name }
                            l_name={ this.state.l_name }
                            interests={ this.state.interests }
                            location={ this.state.location }
                            handleFormChange={this.handleChange}
                            getMoreAccounts={this.getMore}
                            dataPage={ this.state.dataPage }
                            formerror={ this.state.formerror}
                            onSubmit={this.onFormSubmit}
                            clearForm={this.clearForm}
                        />
                    </div>
                </div>
                <div className="col-sm-5 results-column">
                    <div className="col-sm-12 text-center"><h2><Trans i18nKey='translations.all_profiles'></Trans></h2></div>
                    <div className="row mt-3">

                    {resultsBlock}

                    </div>
                </div>
            </div>
        </div>

      </div>
    );

  }


}

//export default App;
export default translate('common')(App);
