import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener máximo 15 caracteres')
            .required('Este campo es obligatorio'),
          lastName: Yup.string()
            .max(15, 'Debe de tener máximo 15 caracteres')
            .required('Este campo es obligatorio'),
          email: Yup.string()
            .email('Email invalido')
            .required('Este campo es obligatorio'),
          terms: Yup.boolean().oneOf(
            [true],
            'Debe de aceptar los terminos y condiciones'
          ),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Este campo es obligatorio'),
        })}
      >
        {(formik) => (
          <Form noValidate autoComplete="off">
            {/*! FIRST NAME */}
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" id="firstName" />
            <ErrorMessage name="firstName" component="span" />

            {/*! LAST NAME */}
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" id="lastName" />
            <ErrorMessage name="lastName" component="span" />

            {/*! EMAIL */}
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="span" />

            {/*! JOB TYPE */}
            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType" id="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            {/*! TERMS AND CONDITIONS */}
            <label htmlFor="terms">
              <Field type="checkbox" name="terms" id="terms" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
