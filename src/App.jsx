import { useForm } from "react-hook-form"
import './app.css'
import { useState } from "react"


function App() {
  const {
    register,
    handleSubmit,
    
    formState: { errors , isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, (d*1000));
    })  
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  }
  return (
    <>
    {isSubmitting && <div>Loading</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Username" {...register("username", { required: { value: true, message: "this Field is required" }, minLength: { value: 3, message: "MIN length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
          {errors.username && <div className="red" > {errors.username.message } </div>}

          <br />
          <input placeholder="Password" {...register("password")} type="password" />
          <br />
          <input disabled={isSubmitting} type="submit" name="submit" />
        </form>
      </div>
    </>
  )
}

export default App
