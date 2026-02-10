package com.hartford.onetomany.repository;

import com.hartford.onetomany.dto.request.CreateUserRequest;
import com.hartford.onetomany.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository
        extends JpaRepository<Customer, Long> {}
