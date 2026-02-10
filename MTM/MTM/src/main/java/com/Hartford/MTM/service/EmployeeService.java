package com.Hartford.MTM.service;

import com.Hartford.MTM.entity.Employee;
import com.Hartford.MTM.repository.EmployeeREPOSITORY;
import com.Hartford.MTM.repository.ProjectREPOSITORY;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
  private final EmployeeREPOSITORY employeeRepository;
  public EmployeeService(EmployeeREPOSITORY employeeRepository){
      this.employeeRepository=employeeRepository;
  }
  public void saveEmployee(Employee empObj){
      employeeRepository.save(empObj);
  }
}
