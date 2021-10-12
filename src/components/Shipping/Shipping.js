import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="shipping-section">
            <div>
                <h2>Shipping Info</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="Phone No." defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;