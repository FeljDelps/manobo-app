import React from 'react';
import ValidationError from '../ValidationError';

class AdminLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            admin_name: {
                value: '',
                touched: false
            },
            admin_password: {
                value: '',
                touched: false
            },
            repeat_admin_password: {
                value: '',
                touched: false
            }
        }
    }
    

    validateRepeatAdminPassword() {
        const repeat_admin_password = this.state.repeat_admin_password.value.trim();
        const admin_password = this.state.admin_password.value.trim();

        if(repeat_admin_password !== admin_password) {
            return 'Passwords must match'
        }
    }
    
    validateAdminPassword() {
        const admin_password = this.state.admin_password.value.trim();

        if(admin_password.length === 0) {
            return 'Administrator password is required'
        }
    }
    
    validateAdminName() {
        const admin_name = this.state.admin_name.value.trim();
        if(admin_name.length === 0) {
            return 'Administrator name is required'
        }
    }

    updateRepeatAdminPassword(repeat_admin_password) {
        this.setState({repeat_admin_password: {value: repeat_admin_password, touched: true}})
    }

    updateAdminPassword(admin_password) {
        this.setState({admin_password: {value: admin_password, touched: true}})
    }
    
    updateAdminName(admin_name) {
        this.setState({admin_name: {value: admin_name, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
        
        const admin = {
            admin_name: this.state.admin_name.value,
            admin_password: this.state.admin_password.value,
            repeat_admin_password: this.state.repeat_admin_password.value
        }

        this.props.history.push('/admin-home')

        console.log(admin)

    }
    
    render() {
        return (
            <form className='AdminLogin' onSubmit={e => this.handleSubmit(e)}>
                <div className='AdminLogin__signup desc'>
                    <h2>Log in to your account</h2>
                </div>
                <div className='AdminLogin__registration-hint'>* required field</div>
                <div className='AdminLogin__form-group'>
                    <label htmlFor='adminName'>Name *</label>
                    <input type='text' className='AdminLogin__control' name='admin_name' id='admin_Name' onChange={e => this.updateAdminName(e.target.value)}/>
                    {this.state.admin_name.touched && (<ValidationError message={this.validateAdminName()}/>)}
                </div>
                <div className='AdminLogin__form-group'>
                    <label htmlFor='adminPassword'>Password *</label>
                    <input type='password' className='AdminLogin__control' name='admin_password' id='admin_password' onChange={e => this.updateAdminPassword(e.target.value)}/>
                    {this.state.admin_password.touched && (<ValidationError message={this.validateAdminPassword()}/>)}
                </div>
                <div className='AdminLogin__form-group'>
                    <label htmlFor='repeatAdminPassword'>Repeat  password *</label>
                    <input type='password' className='AdminLogin__control' name='repeat_admin_password' id='repeat_admin_password' onChange={e => this.updateRepeatAdminPassword(e.target.value)}/>
                    {this.state.repeat_admin_password.touched && (<ValidationError message={this.validateRepeatAdminPassword()}/>)}
                </div>
                <div className='AdminLogin__button-group'>
                    <button type='reset' className='AdminLogin__login-button'>
                        Cancel
                    </button>
                    <button 
                        type='submi' 
                        className='AdminLogin__login-button'
                        disabled={
                            this.validateAdminName() ||
                            this.validateAdminPassword() ||
                            this.validateRepeatAdminPassword()
                        }>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

export default AdminLogin;