import React from 'react';
import { translate } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class NewAccount extends React.Component {

    render() {
        return (
            <form name="Search_form" id="profile_form">
                <div className="form-group">
                    <div className="col-sm-12">
                        <label htmlFor="f_name">{ this.props.t('translations.first_name', { framework: "react-i18next" }) }</label>
                        <input className="form-control form-control-sm rounded-3" 
                            type="text"
                            placeholder={ this.props.t('translations.enter_first_name', { framework: "react-i18next" }) }
                            name="f_name"
                            value={this.props.f_name}
                            onChange={this.props.handleFormChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <label htmlFor="l_name">{ this.props.t('translations.last_name', { framework: "react-i18next" }) }</label>
                        <input className="form-control form-control-sm rounded-3" 
                            type="text"
                            placeholder={ this.props.t('translations.enter_last_name', { framework: "react-i18next" }) }
                            name="l_name"
                            value={this.props.l_name}
                            onChange={this.props.handleFormChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <label htmlFor="interests">{ this.props.t('translations.interests', { framework: "react-i18next" }) }</label>
                        <input className="form-control form-control-sm rounded-3" 
                            type="text"
                            placeholder={ this.props.t('translations.enter_interests', { framework: "react-i18next" }) }
                            name="interests"
                            value={this.props.interests}
                            onChange={this.props.handleFormChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <label htmlFor="location">{ this.props.t('translations.location', { framework: "react-i18next" }) }</label>
                        <input className="form-control form-control-sm rounded-3" 
                            type="text"
                            placeholder={ this.props.t('translations.enter_location', { framework: "react-i18next" }) }
                            name="location"
                            value={this.props.location}
                            onChange={this.props.handleFormChange}
                        />
                    </div>
                </div>
                {
                    (this.props.formerror !== '')
                    ? <div className="form-group col-sm-12 text-danger"><small>{ this.props.t(this.props.formerror, { framework: "react-i18next" }) } </small></div>
                    : ''
                }
                <div className="form-group">
                    <div className="col-sm-5 m5 float-left">
                        <button 
                            type="button" 
                            className="btn btn-sm btn-success" 
                            onClick={() => this.props.onSubmit()}> 
                            <FontAwesomeIcon icon={faSave} />
                            { this.props.t('translations.save', { framework: "react-i18next" }) }
                        </button>
                    </div>
                    <div className="col-sm-5 m5 float-left">
                        <button 
                            type="button" 
                            className="btn btn-sm btn-danger"
                            onClick={() => this.props.clearForm()}> 
                            <FontAwesomeIcon icon={faBan} />
                            { this.props.t('translations.clear', { framework: "react-i18next" }) }
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <div className={this.props.dataPage === 1 ? "d-none" : "col-sm-5 mt-3 float-left"}>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-warning"
                            onClick={() => this.props.getMoreAccounts(1,10)}> 
                            <FontAwesomeIcon icon={faArrowUp} />
                            { this.props.t('translations.first_records', { framework: "react-i18next" }) }
                        </button>
                    </div>
                    <div className={this.props.dataPage === 2 ? "d-none" : "col-sm-5 mt-3 float-left"}>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-warning"
                            onClick={() => this.props.getMoreAccounts(2,10)}> 
                            <FontAwesomeIcon icon={faArrowDown} />
                            { this.props.t('translations.last_records', { framework: "react-i18next" }) }
                        </button>
                    </div>
                </div>
            </form>
        )
    }
} 

export default translate('common')(NewAccount); 