package com.hartford.onetomany.service;

import com.fasterxml.jackson.annotation.OptBoolean;
import com.hartford.onetomany.dto.request.CreateUserRequest;
import com.hartford.onetomany.dto.response.GetCustomerResponse;
import com.hartford.onetomany.entity.Customer;
import com.hartford.onetomany.repository.CustomerRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository repo;

    public CustomerService(CustomerRepository repo) {
        this.repo = repo;
    }

    public Customer save(CreateUserRequest c){
        Customer cust = Customer.builder()
                .name(c.getName()).build();
//        Customer c1 = c.toEntity();
        return repo.save(cust);
    }

    public List<Customer> getAll(){
        return repo.findAll();
    }

    public GetCustomerResponse getById(Long id){
        Customer cust = repo.findById(id).orElse(null);
        GetCustomerResponse res = GetCustomerResponse.builder()
                .name(cust.getName())
                .age(Integer.parseInt("10"))
                .build();

        return res;
    }

    public void delete(Long id){
        repo.deleteById(id);
    }
}
