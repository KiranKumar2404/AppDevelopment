package com.example.plantpro.Service;


import com.example.plantpro.Request.AuthenticationRequest;
import com.example.plantpro.Request.RegisterRequest;
import com.example.plantpro.Response.AuthenticationResponse;

public interface AuthServiceint {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
