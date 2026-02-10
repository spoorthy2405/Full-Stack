package com.hartford.onetomany.controller;

import com.hartford.onetomany.dto.request.CreateUserRequest;
import com.hartford.onetomany.dto.response.GetCustomerResponse;
import com.hartford.onetomany.entity.Customer;
import com.hartford.onetomany.service.CustomerService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @PostMapping
    public Customer create(@RequestBody CreateUserRequest c){
        return service.save(c);
    }

    @GetMapping
    public List<Customer> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public GetCustomerResponse getOne(@PathVariable Long id){
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id){
        service.delete(id);
        return "Deleted";
    }
}
