import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './content.css';

const List = (props) => {

  return (<div>

    <div className="list">
    
    <div className='card title'>
            <h3>Employee Details</h3>
        </div>
      <div className="card">
     {props.adddata.map((item) => 
       <div className="">{item}</div>
     )}

     </div>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  debugger
  return {
    adddata: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
