package org.eugene.itassets.service;

import org.eugene.itassets.controller.ComputerController;
import org.eugene.itassets.domain.Computer;
import org.eugene.itassets.domain.Department;
import org.eugene.itassets.domain.Employee;
import org.eugene.itassets.repository.ComputerRepository;
import org.eugene.itassets.repository.DepartmentRepository;
import org.eugene.itassets.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final ComputerRepository computerRepository;
    private final ComputerController computerController;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, ComputerRepository computerRepository,
                           ComputerController computerController) {
        this.employeeRepository = employeeRepository;
        this.computerRepository = computerRepository;
        this.computerController = computerController;
    }

    public List<Employee> getAllEmployeeByDepartment(Department department) {
        return employeeRepository.findByDepartment(department);
    }

    public void delete(Employee employee) {
        if (computerRepository.findByEmployee(employee) == null) {
            employeeRepository.delete(employee);
        }
        else {
            Computer computer = computerRepository.findByEmployee(employee);
            computerController.delete(computer);
        }
    }
}
