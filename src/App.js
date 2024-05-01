import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Поле "Ім\'я" є обов\'язковим';
    }

    if (!values.email) {
        errors.email = 'Поле "Електронна пошта" є обов\'язковим';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Некоректний формат електронної пошти';
    }

    if (!values.phone) {
        errors.phone = 'Поле "Телефон" є обов\'язковим';
    } else if (!/^\d{12}$/.test(values.phone)) {
        errors.phone = 'Некоректний номер телефону (потрібно 12 цифр)';
    }

    return errors;
};

const App = () => {
    return (
        <div>
            <h1>Форма з валідацією</h1>
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Ім'я</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="email">Електронна пошта</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="phone">Телефон</label>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Відправити
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;
