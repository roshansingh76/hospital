  import React from 'react';
  import { Link } from 'react-router-dom';
  import ReactModalLogin from "react-modal-login";
   const FrontendLogin=(props)=>{

        return (
          <ReactModalLogin
          visible={props.state.showModal}
          onCloseModal={props.closeModal.bind(props)}
          loading={props.state.loading}
          error={props.state.error}
          tabs={{
            afterChange: props.afterTabsChange.bind(props)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={props.startLoading.bind(props)}
          finishLoading={props.finishLoading.bind(props)}
        
        />
      
       )
  }
  export default FrontendLogin;