import * as Yup from 'yup';

export const EditScreenDialogSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .required('Required'),
});
