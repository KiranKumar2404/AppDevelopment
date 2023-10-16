import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminAuth = () => {

    const Token = localStorage.getItem('token');
    const Role =  localStorage.getItem('role');

    return (

        Token && Role==="ADMIN" ? <Outlet /> : <Navigate to='/admin' />
    )
};