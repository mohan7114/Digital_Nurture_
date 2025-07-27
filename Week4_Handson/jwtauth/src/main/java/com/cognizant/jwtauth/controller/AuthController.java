package com.cognizant.jwtauth.controller;

import com.cognizant.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public String generateToken(@RequestHeader("Authorization") String authHeader) {
        String[] parts = authHeader.split(" ");
        String decoded = new String(Base64.getDecoder().decode(parts[1]));
        String[] userDetails = decoded.split(":");
        String username = userDetails[0];
        String password = userDetails[1];

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        final UserDetails user = userDetailsService.loadUserByUsername(username);
        return "{\"token\":\"" + jwtUtil.generateToken(user.getUsername()) + "\"}";
    }
}
