import React, { Component, useContext, useEffect, useState } from 'react';
import { UserContext } from '../ContextApi/UserContextApi';

export function SearchInput() {
    const [movies, setUserState] = useContext(UserContext);
    const [input, setInput] = useState({});
    const onHandleChange = (e, val) => {
        input[val] = e.target.value;
    }
    const onSubmit = () => {
    }
    return (
        <div>
            <div>
                <div className="user">
                    <label>user Name</label>
                    <input
                        type="text"
                        name="userName"
                        value={input['userName']}
                        onChange={(e) => {
                            onHandleChange(e, "userName")
                        }}
                    />
                </div>
                <div className="user">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={input['phoneNumber']}
                        onChange={(e) => {
                            onHandleChange(e, "phoneNumber")
                        }}
                    />
                </div>
                <div className="user">
                    <label>Email</label>

                    <input
                        type="text"
                        name="email"
                        value={input['email']}
                        onChange={(e) => {
                            onHandleChange(e, "email")
                        }}
                    />
                </div>
                <div className="user">
                    <label>Password</label>

                    <input
                        type="text"
                        name="password"
                        value={input['password']}
                        onChange={(e) => {
                            onHandleChange(e, "password")
                        }}
                    />
                </div>
                <div className="user">
                    <label>ReType Password</label>

                    <input
                        type="text"
                        name="reTypePassword"
                        value={input['reTypePassword']}
                        onChange={(e) => {
                            onHandleChange(e, "reTypePassword")
                        }}
                    />
                </div>
                <div>
                    <button
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                    >
                        Registration
              </button>
                </div>
            </div>
        </div>
    );

}