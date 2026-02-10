package com.Hartford.MTM.repository;

import com.Hartford.MTM.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeREPOSITORY extends JpaRepository<Employee, Long> {
}
