import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";
import propTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid();
    numberId = nanoid();

    handelChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className={css.form}>
                <label className={css.formLabel}>
                    Name
                </label>
                <input
                    id={this.nameId}
                    className={css.formInput}
                    type="text"
                    name="name"
                    value={this.name}
                    placeholder="Please enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handelChange}
                />
                <label className={css.formLabel}>
                    Phone number
                </label>
                <input
                    id={this.numberId}
                    className={css.formInput}
                    type="tel"
                    name="number"
                    value={this.number}
                    placeholder="Please enter number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handelChange}
                />
                <button className={css.btn} type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};