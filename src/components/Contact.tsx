import React from "react";
import { useForm } from "react-hook-form";

type Profile = {
  firstName: string;

  lastName: string;

  email: string;

  message: string;
};

const Contact: React.FC = () => {
  //hämtar register från useForm. Sätter register som där alla värden från input ska lagras i.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  //skapar en submit funktion till button.
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <p className="h3 fw-bold">This is Contact page</p>

          <div className="row mt-3 ">
            <div className="col">
              <form onSubmit={onSubmit}>
                <div className="form-group ">
                  {/* <label htmlFor='firstName'>FirstName: </label> */}

                  <input
                    placeholder="FirstName"
                    className="form-control-sm"
                    {...register("firstName", { required: true })}
                    type="text"
                    name="firstName"
                    id="firstName"
                  />
                  {errors.firstName && (
                    <div className="text-danger ">Enter your firstname</div>
                  )}
                </div>

                <div className="form-group mt-2">
                  {/* <label htmlFor='lastName'>last Name: </label> */}

                  <input
                    placeholder="LastName"
                    className="form-control-sm"
                    {...register("lastName", { required: true })}
                    type="text"
                    name="lastName"
                    id="lastName"
                  />

                  {errors.lastName && (
                    <div className="text-danger">Enter your lastname</div>
                  )}
                </div>

                <div className="form-group mt-2">
                  {/* <label htmlFor='email'>Email: </label> */}

                  <input
                    placeholder="Email"
                    className="form-control-sm"
                    {...register("email", { required: true })}
                    type="text"
                    name="email"
                    id="email"
                  />

                  {errors.email && (
                    <div className="text-danger fwt-italic">
                      Enter your email
                    </div>
                  )}
                </div>

                <div className="form-group mt-2">
                  <textarea
                    placeholder="Message"
                    className="message"
                    {...register("message", { required: true })}
                    id="message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
