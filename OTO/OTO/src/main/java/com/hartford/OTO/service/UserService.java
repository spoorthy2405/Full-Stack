package com.hartford.OTO.service;

import com.hartford.OTO.entity.User;
import com.hartford.OTO.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public User create(User user) {
        user.getProfile().setUser(user);
        return repository.save(user);
    }

}
