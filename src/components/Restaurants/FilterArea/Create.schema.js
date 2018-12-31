import * as Yup from 'yup';

const CreateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .required('Required'),
});

export default CreateFormSchema
