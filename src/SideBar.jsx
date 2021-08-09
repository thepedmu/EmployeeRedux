import React from 'react';
import './SideBar.css';
import kv from './kv.png';
import {connect} from 'react-redux';

import { displayEmployeeList } from './action';

const SideBar = (props) => {
    return(
        <div className='sidebar'>
            <div className="logo">
                    <img className="logo" src={kv} alt="logo"/>
                </div>
            <div className='sidebar-element' onClick={() => props.showEmployeeList(false)}>
            <div className='icon-container'>
                    <img className='icon' src='https://img.icons8.com/dusk/20/000000/groups.png' alt='People'/>
            </div>
                    <p>
                        Add Employee
                    </p>
            </div>
            <div className='sidebar-element' onClick={() => props.showEmployeeList(true)}>
                <div className='icon-container'>
                    <img className='icon' src='https://img.icons8.com/dusk/20/000000/groups.png' alt='People'/>
                </div>
                    <p>
                        Employee list
                    </p>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        displayList: state.displayList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showEmployeeList: (value) => {
            dispatch(displayEmployeeList(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);



