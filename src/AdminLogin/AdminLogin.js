import React from 'react';
import ValidationError from '../ValidationError';

class AdminLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            adminName: {
                value: '',
                touched: false
            },
            adminPassword: {
                value: '',
                touched: false
            },
            repeatAdminPassword: {
                value: '',
                touched: false
            }
        }
    }
    

    validateRepeatAdminPassword() {
        const repeatAdminPassword = this.state.repeatAdminPassword.value.trim();
        const adminPassword = this.state.adminPassword.value.trim();

        if(repeatAdminPassword !== adminPassword) {
            return 'Passwords must match'
        }
    }
    
    validateAdminPassword() {
        const adminPassword = this.state.adminPassword.value.trim();

        if(adminPassword.length === 0) {
            return 'Administrator password is required'
        }
    }
    
    validateAdminName() {
        const adminName = this.state.adminName.value.trim();
        if(adminName.length === 0) {
            return 'Administrator name is required'
        }
    }

    updateRepeatAdminPassword(repeatAdminPassword) {
        this.setState({repeatAdminPassword: {value: repeatAdminPassword, touched: true}})
    }

    updateAdminPassword(adminPassword) {
        this.setState({adminPassword: {value: adminPassword, touched: true}})
    }
    
    updateAdminName(adminName) {
        this.setState({adminName: {value: adminName, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
        
        const admin = {
            name: this.state.adminName.value,
            password: this.state.adminPassword.value,
            repeatPassword: this.state.repeatAdminPassword.value
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
                    <input type='text' className='AdminLogin__control' name='adminName' id='adminName' onChange={e => this.updateAdminName(e.target.value)}/>
                    {this.state.adminName.touched && (<ValidationError message={this.validateAdminName()}/>)}
                </div>
                <div className='AdminLogin__form-group'>
                    <label htmlFor='adminPassword'>Password *</label>
                    <input type='password' className='AdminLogin__control' name='adminPassword' id='adminPassword' onChange={e => this.updateAdminPassword(e.target.value)}/>
                    {this.state.adminPassword.touched && (<ValidationError message={this.validateAdminPassword()}/>)}
                </div>
                <div className='AdminLogin__form-group'>
                    <label htmlFor='repeatAdminPassword'>Repeat  password *</label>
                    <input type='password' className='AdminLogin__control' name='repeatAdminPassword' id='repeatAdminPassword' onChange={e => this.updateRepeatAdminPassword(e.target.value)}/>
                    {this.state.repeatAdminPassword.touched && (<ValidationError message={this.validateRepeatAdminPassword()}/>)}
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