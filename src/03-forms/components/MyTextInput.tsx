import { ErrorMessage, useField } from 'formik';

interface Props {
  id?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} className="text-input" />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
