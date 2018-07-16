import React from "react";
//in order to access the props of this component (app) props must be passed as an argument here
const UserForm = (props) => {
    return (
        <form onSubmit={props.getUser}>
     <input style={{margin:"20px auto", display: "block"}}type ="text" name="username"/>
     <button>submit</button>
            </form>

    )
}

export default UserForm;