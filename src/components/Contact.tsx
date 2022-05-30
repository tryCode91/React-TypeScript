import React from 'react';
import {useForm} from 'react-hook-form'

type Profile = {

    firstName : string;

    lastName : string;

    email : string;


}

const Contact: React.FC = () => {

    //hämtar register från useForm. Sätter register som där alla värden från input ska lagras i.
    const {register, handleSubmit, formState: {errors}} = useForm<Profile>();

    //skapar en submit funktion till button.
    const onSubmit = handleSubmit(  (data) => {

        alert(JSON.stringify(data))

    })


    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col">
                    <p className='h3 fw-bold'>This is Contact page</p>
                </div>
            </div>
    
                    
                    
                    <div className="row mt-3 text-center">
                        <div className="col-sm-5">

                     
                    <form onSubmit={onSubmit}>


                        <div className="form-group">
                        
                            <label htmlFor='firstName'>FirstName: </label>

                            <input className='form-control' {...register('firstName', {required : true})} type='text' name='firstName' id='firstName' />
                            {
                                errors.firstName && <div className="text-danger ">Enter your firstname</div>
                            }
                        </div>
                        
                        <div className="form-group">
                        
                            <label htmlFor='lastName'>last Name: </label>
                        
                            <input className='form-control' {...register('lastName', {required : true})} type='text' name='lastName' id='lastName' />
                            
                            {
                                
                                errors.lastName && <div className='text-danger'>Enter your lastname</div>

                            }

                        </div>
                        
                        <div className="form-group">
                        
                            <label htmlFor='email'>Email: </label>
                            
                            <input className='form-control' {...register('email', {required : true})} type='text' name='email' id='email' />

                            {

                                errors.email && <div className='text-danger fwt-italic'>Enter your email</div>

                            }
                        
                        </div>


                        <button type='submit' className='btn btn-primary'>Submit</button>
                    
                    </form>
                
                
                
                
                
                </div>
            </div>
        </div>
    )
}

export default Contact;