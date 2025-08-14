import { useForm } from "react-hook-form"
import './app.css'
import { useState } from "react"


function App() {
  const {
    register,
    handleSubmit,
    setError,
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
    //await delay(2)
    let r = await  fetch("http://localhost:3000/", {method: "POST" , body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data , res)
  }


  return (
    <>
    {isSubmitting && <div>Loading</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Username" {...register("username", { required: { value: true, message: "this Field is required" }, minLength: { value: 3, message: "MIN length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })} type="text" />
          {errors.username && <div className="red" > {errors.username.message } </div>}

          <br />
          <input placeholder="Password" {...register("password" , {minLength: { value: 7 , message: "Minimum password of 7 length required" } })} type="password" />
           {errors.password && <div className="red" > {errors.password.message } </div>}

          <br />
          <input  disabled={isSubmitting} type="submit" name="submit" />
          {errors.Myform && <div className="red" > {errors.Myform.message } </div>}
        </form>
      </div>
    </>
  )
}

export default App
