import React,{Component}from 'react';
import { Link } from 'react-router-dom';
class Setting extends Component{
constructor(props) {
	super(props);
}
componentDidMount() {
	
}
render(){
return(
<div className="page-wrapper">
   <div className="content container-fluid">
      <div className="page-header">
         <div className="row">
            <div className="col-sm-12">
               <h3 className="page-title">Welcome Setting</h3>
               <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Setting</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
export default Setting;