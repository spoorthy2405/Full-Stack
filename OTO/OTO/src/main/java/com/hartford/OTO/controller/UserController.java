package com.hartford.OTO.controller;


import com.hartford.OTO.entity.User;
import com.hartford.OTO.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService service;
    public UserController(UserService service){
        this.service=service;
    }
    @PostMapping
    public User create(@RequestBody User user){
        return service.create(user);
    }
}
