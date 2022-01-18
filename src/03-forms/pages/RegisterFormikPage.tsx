import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

/**
 * name: min 2, max 15, required
 * email: required, email
 * pass: min 6, equals pass2
 */

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <hr />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Este campo debe tener mínimo 2 caracteres')
            .max(15, 'Debe de tener máximo 15 caracteres')
            .required('Este campo es obligatorio'),
          email: Yup.string()
            .email('Email invalido')
            .required('Este campo es obligatorio'),
          password1: Yup.string()
            .min(6, 'Este campo debe tener mínimo 6 caracteres')
            .required('Este campo es obligatorio'),
          password2: Yup.string()
            .required('Este campo es obligatorio')
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir'),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate autoComplete="off">
            {/*! NAME */}
            <MyTextInput
              type="text"
              name="name"
              id="name"
              label="Nombre"
              placeholder="Jon Doe"
            />

            {/*! EMAIL */}
            <MyTextInput
              type="email"
              name="email"
              id="email"
              label="Correo electrónico"
              placeholder="jondoe@email.com"
            />

            {/*! PASSWORD1 */}
            <MyTextInput
              type="password"
              name="password1"
              id="password1"
              label="Contraseña"
              placeholder="********"
            />

            {/*! PASSWORD2 */}
            <MyTextInput
              type="password"
              name="password2"
              id="password2"
              label="Confirma la contraseña"
              placeholder="********"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
