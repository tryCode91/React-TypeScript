import React from 'react';
import {useForm} from 'react-hook-form'
import '../App.css';
type Profile = {

    firstName : string;

    lastName : string;

    email : string;

    message: string;
}

const Contact: React.FC = () => {

    //hämtar register från useForm. Sätter register som där alla värden från input ska lagras i.
    const {register, handleSubmit, formState: {errors}} = useForm<Profile>();

    //skapar en submit funktion till button.
    const onSubmit = handleSubmit(  (data) => {

        alert(JSON.stringify(data))

    })


    return (
        <div className='contactForm'>
   
                    <p className='h3 mb-4 mt-4 fw-bold'>This is a Contact page</p>
          

                    <form onSubmit={onSubmit} className="mt-5 form shadow">


                            <div className='flexChildren'>  
                                        
                                


                                <input className='AddToList-input' {...register('firstName', {required : true})} placeholder="Firstname" type='text' name='firstName' id='firstName' />
                                    
                                {
                                
                                errors.firstName && <div className="text-danger ">Enter your firstname</div>
                                    
                                }

                        
                            </div>
                        
                            <div className="flexChildren">
                        
                        
                       

                                <input className='AddToList-input' {...register('lastName', {required : true})} placeholder="Lastname" type='text' name='lastName' id='lastName' />
                                
                                {
                                    
                                    errors.lastName && <div className='text-danger'>Enter your lastname</div>
                                    
                                }

                       
                        
                            </div>

                            <div className="flexChildren">
                        
                        
                            
                            <input className='AddToList-input' {...register('email', {required : true})} placeholder="Email" type='text' name='email' id='email' />

                            {
                                
                                errors.email && <div className='text-danger fwt-italic'>Enter your email</div>
                                
                            }
                        
                     
                            </div>

                          
                        
                            <div className="flexChildren">
                                <textarea
                                    id="message"
                                    placeholder='Message'
                                    {...register('message', {required : false})}
                                    className="AddToList-input"
                                />
                            </div>
                  
                 
                     

                        <button type='submit' className='btn btn-primary'>Submit</button>
                    
                    </form>
                

                
                    </div>
         
    )
}

export default Contact;