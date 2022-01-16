import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

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
            <MyTextInput
              name="firstName"
              id="firstName"
              label="First Name"
              placeholder="Nombre..."
            />

            {/*! LAST NAME */}
            <MyTextInput
              name="lastName"
              id="lastName"
              label="Last Name"
              placeholder="Apellido..."
            />

            {/*! EMAIL */}
            <MyTextInput
              name="email"
              id="email"
              label="Email Address"
              placeholder="Nombre..."
              type="email"
            />

            {/*! JOB TYPE */}
            <MySelect name="jobType" id="jobType" label="Job Type Custom">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            {/*! TERMS AND CONDITIONS */}
            <MyCheckbox
              label="Terms and conditions"
              id={'terms'}
              name={'terms'}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
