import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in the format xxx-xx-xx').required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
          <Form className={css.formNewContact}>
              <div>
                  <h1>Phonebook</h1>
              
        <label htmlFor="name">Name</label>
        <Field className={css.field} type="text" id="name" name="name" />
        <ErrorMessage name="name" as="span" className={css.error} />

        <label htmlFor="number">Number</label>
        <Field className={css.field} type="text" id="number" name="number" />
        <ErrorMessage name="number" as="span" className={css.error} />

                  <button type="submit">Add contact</button>
                  </div>
      </Form>
    </Formik>
  );
}