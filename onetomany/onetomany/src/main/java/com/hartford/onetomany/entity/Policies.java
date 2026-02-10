package com.hartford.onetomany.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Policies {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long policyid;
    public String policyName;
    public String type;
    @ManyToOne
    @JoinColumn(name = "customerId")
    public Customer customer;
}
