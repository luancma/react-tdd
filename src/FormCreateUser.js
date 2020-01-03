import React from 'react'

export default function FormCreateUser(){
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div>
            <form data-testid="form-user">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={user.name}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={user.email}/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={user.password}/>

                <input type="submit" value="Create user" />
            </form>
        </div>

    )
}