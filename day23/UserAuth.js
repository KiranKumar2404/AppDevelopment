import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const UserAuth = () => {
    const token = localStorage.getItem('token');
    const role =  localStorage.getItem('role');

    return (

        token && role==="CUSTOMER" ? <Outlet /> : <Navigate to='/' />
    )
};