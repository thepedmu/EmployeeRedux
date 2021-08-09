
import React from 'react';
import './content.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {connect} from 'react-redux';



const Content= (props) =>{
    const [data,setData] =useState("");
    let d= "";
    const [className,setClassName] =useState("card form");
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data =>{ 
      debugger
      props.adddata(data)
      for (const [key, value] of Object.entries(data)) {
        d=d +`${key}:${value}\n`;
      }
      data=setData(JSON.stringify(data));
      debugger
    })

 for (const [key, value] of Object.entries(data)) {
    d.concat(key,value);
  }
  console.log(errors);

    return(
        <div className='content'>
        <div className='card title'>
            <h3>Create Employee</h3>
        </div>
        <form className='card form' onSubmit={handleSubmit(onSubmit)}>
            <div className='fields'>
            <div className="tag"><div>Employee Name</div><input name="name" type="text" placeholder="Employee Name" {...register("Employeename", {required: true, pattern: /^[A-Z][a-z]+/,min: -1, maxLength: 64})}/></div>
            <div className="tag"><div>Employee ID</div><input name="id" type="text" pattern="[a-z0-9._%+-]+@keyvalue.systems" placeholder="Employee ID"{...register("EmployeeID", {required: true, maxLength: 30})}/></div>
            <div className="tag"><div>Joining Date </div><input name="date" type="date" placeholder="Joining Date" {...register("JoiningDate", {required: true,max:Date(2021,8,4)})}/></div>
            <div className="tag"><div>Role</div>
                <select {...register("Role",{required:true})}>
                <option value="" disabled selected hidden>Role</option>
                <option>Associate Software Engineer</option>
                <option>Quality Assurance Engineer</option>
                <option>UI/UX Designer</option>
            </select>
            </div>
            <div className="tag"><div>Status</div>
                <select {...register("Status",{required:true})}>
                <option value="" disabled selected hidden>Status</option>
                <option>Married</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Open Relationship</option>
            </select></div>
            <div className="tag"><div>Experience</div><input name="exp" type="number" placeholder="Experience" {...register("Experience",{required:true,maxLength:2,max:10,min:0})}/></div>
            <div className="tag"><div>Address</div><input name="address" type="text" placeholder="Employee Address"{...register("Address", {required: true, maxLength: 100})}/></div>
            <div className="tag"><div>Upload ID Proof</div><input name="idproof" type="file" {...register("ID",{required:true})}/></div>
            </div>
            <div className='buttons'>
                <input className='button create' type="submit" value="Create"/>
                <button className='button cancel'>Cancel</button>
            </div>
        </form>
        
        {/* {state === "Employee Details" && <div><List /></div>} */}
    </div>
    );
}


const mapStateToProps = (state) => {
    return {}
  
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      adddata: (data) => {
        debugger
        dispatch({
          type: 'EMP:ADD',
          data
        })
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Content);