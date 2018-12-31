import * as Yup from 'yup';

const CreateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short')
    .required('Required'),
  price_in_cents: Yup.number()
    .min(1, 'Price need to be higher than 0')
    .required('Required'),
  restaurant_id: Yup.number()
    .required('Required'),
});

export default CreateFormSchema
