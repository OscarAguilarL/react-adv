import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value || 1,
        `Minimo de ${(rule as any).value || 2}`
      );
    }
    if (rule.type === 'email') {
      schema = schema.email('Email invalido');
    }

    // ... otras reglas
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dinamic Forms</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    label={label}
                    name={name}
                    type={type as any}
                    id={name}
                    placeholder={placeholder}
                    key={name}
                  />
                );
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name} id={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type}, no es soportado`);
            })}

            <input type="submit" value="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
