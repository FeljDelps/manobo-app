import React from 'react';
import ValidationError from '../ValidationError';


//validation error for email address not working

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
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
            }
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
    
    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
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
    
    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    
    handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            name: this.state.name.value,
            phone: this.state.phone.value,
            email: this.state.email.value,
            comment: this.state.comment.value
        }

        console.log(newUser);

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
                    <label htmlFor='name'>Name *</label>
                    <input type='text' className='SignupForm__control' name='name' id='name' onChange={e => this.updateName(e.target.value)}/>
                    {this.state.name.touched && (<ValidationError message={this.validateName()}/>)}
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
                            this.validateName () ||
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