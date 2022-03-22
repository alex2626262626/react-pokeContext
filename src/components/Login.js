import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, formState } = useForm();
	const {errors} = formState;
  //const [count, SetCount] = useState(0);

  const onSubmit = (data, e) => {
    console.log('Faire quelque chose au submit des', data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('username', {required: 'You need to enter the description' })}
		      placeholder="username" />
            <input {...register('password', {required: 'You need to enter the description' })}
		      placeholder="password" />
            
      <p> {errors.description && errors.description.message} </p>
     
      <button className="button" type="submit">Submit</button>
    </form>
  );
}
