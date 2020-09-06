package com.example.boatapp.service;

import java.util.ArrayList;
import java.util.Optional;

import com.example.boatapp.entity.User;
import com.example.boatapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (this.userRepository.existsUserByUsername(username)) {
            return this.userRepository.findByUsername(username);
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}