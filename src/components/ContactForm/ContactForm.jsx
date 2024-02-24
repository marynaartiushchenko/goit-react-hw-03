import css from './ContactForm.module.css'

export default function ContactForm({ onAdd }) {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now (),
           name: e.target.element.name.value,
            number: e.target.element.number.value,
        });
        e.target.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.labelTitle}>Name</label>
            <input className={css.field} type="text" name="name"></input>
             <label className={css.labelTitle}>Number</label>
            <input className={css.field} type="tel" name="number"></input>
            <button type="submit">Add contact</button>
        </form>
    );
}