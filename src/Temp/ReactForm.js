import React from "react";
import { useForm } from "react-hook-form";

export default function ReactForm() {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("fName")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("lName", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.lName && <span>This field is required</span>}
      <br/>
      <input type="submit" className="btn btn-success" />
    </form>
  );
}