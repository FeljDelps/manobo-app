import React from 'react';
import config from '../config';
import ValidationError from '../ValidationError';
import ManoboContext from '../ManoboContext';


//validation error for email address not working

class SignupForm extends React.Component {

    static contextType = ManoboContext;

    constructor(props) {
        super(props);
        this.state = {
            lead_name: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            phone: {
                value:'',
                touched: false
            },
            comment: {
                value: '',
                touched: false
            },
            error: null
        }
    } 
    

    validatePhone() {
        const phone = this.state.phone.value.trim();
        if(phone.length === 0) {
            return 'Phone number is required';
        } else if (!phone.match(/[0-9]/)) {
            return 'Must submit a valid phone number'
        }
    }
    
    validateEmail() {
        const email = this.state.email.value.trim();
        if(email.length === 0) {
            return 'Email is required'
        } else if (!email.match(/.+@.+\..+/)) {
            return 'Must contain an email address'
        }
    }
    
    validateLeadName() {
        const leadName = this.state.lead_name.value.trim();
        if (leadName.length === 0) {
            return 'Name is required';
        } else if (leadName.length < 3) {
            return 'Name must be at least 3 characters long'
        }
    }
    
    updateComment(comment) {
        this.setState({comment: {value: comment, touched: true}});
    }

    updateEmail(email) {
        this.setState({email: {value: email, touched: true}});
    }
    
    updatePhone(phone) {
        this.setState({phone: {value: phone, touched: true}});
    }
    
    updateLeadName(lead_name) {
        this.setState({lead_name: {value: lead_name, touched: true}});
    }

    
    handleSubmit(event) {
        event.preventDefault();

        const { lead_name, email, phone, comment } = event.target

        const newUser = {
            lead_name: lead_name.value,
            email: email.value,
            phone: phone.value,
            comment: comment.value
        };
        
        this.setState({
            error: null
        });

        fetch(`${config.API_ENDPOINT}/api/leads`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type':'application/json',
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    lead_name: {value: '', touched: false},
                    phone: {value: '', touched: false},
                    email: {value: '', touched: false},
                    comment: {value: '', touched: false}
                });
                this.context.addLead(data);
                this.props.history.push('/admin-home');
                console.log(data)
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    
    render() {
        return (
            <form className='SignupForm' onSubmit={e => this.handleSubmit(e)}>
                <div className='SignupForm__signup-descr'>
                    <h2>Sign up now!</h2>
                    <h3>Fill out the form below, and one of our agents will get back to your shortly.</h3>
                </div>
                <div className='SignupForm__registration-hint'>* required field</div>
                <div className='SignupForm__form-group'>
                    <label htmlFor='lead_name'>Name *</label>
                    <input type='text' className='SignupForm__control' name='lead_name' id='lead_name' onChange={e => this.updateLeadName(e.target.value)}/>
                    {this.state.lead_name.touched && (<ValidationError message={this.validateLeadName()}/>)}
                </div>
                <div className='SignupForm__form-group'>
                    <label htmlFor='phone'>Phone number *</label>
                    <input type='tel' className='SignupForm__control' name='phone' id='phone' onChange={e => this.updatePhone(e.target.value)}/>
                    {this.state.phone.touched && (<ValidationError message={this.validatePhone()}/>)}
                </div>
                <div className='SignupForm__form-group'>
                    <label htmlFor='email'>Email *</label>
                    <input type='email' className='SignupForm__control' name='email' id='email' onChange={e => this.updateEmail(e.target.value)}/>
                    {this.state.email.touched && (<ValidationError message={this.validateEmail()}/>)}
                </div>
                <div className='SignupForm__registration-hint'>
                    Let us know which services you're interested so we can put together the best package for your needs.
                </div>
                <div className='SignupForm__form-group'>
                    <label htmlFor='comment'>Tell us more ...</label>
                    <input type='textArea' className='SignupForm__control' name='comment' id='comment' onChange={e => this.updateComment(e.target.value)}/>
                </div>
                <div className='SignupForm__button-group'>
                    <button type='reset' className='SignupForm__registration-button'>
                        Cancel
                    </button>
                    <button 
                        type='submit' 
                        className='SignupForm__registration-button'
                        disabled ={
                            this.validateLeadName () ||
                            this.validatePhone() ||
                            this.validateEmail()
                        }>
                        Submit
                    </button>
                </div>

            </form>
        );
    };
}

export default SignupForm;