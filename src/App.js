import './App.css';
import './kv.png'
import SideBar from './SideBar';
import Content from './content';
import List from './List';
import {connect} from 'react-redux';

function App(props) {

  return (
    <div className='App'>
      <SideBar />
      {props.showEmployeeList?
           <List />
          :
         <Content />   
        }

    </div>
  );
}


const mapStateToProps = (state) => ({
  showEmployeeList: state.showEmployeeList
});

export default connect(mapStateToProps)(App);
