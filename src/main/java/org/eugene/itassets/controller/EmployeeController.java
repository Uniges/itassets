package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Employee;
import org.eugene.itassets.repository.EmployeeRepository;
import org.eugene.itassets.service.EmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/employee")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;
    private final EmployeeService employeeService;
    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository, EmployeeService employeeService) {
        this.employeeRepository = employeeRepository;
        this.employeeService = employeeService;
    }

    @GetMapping("{id}")
    public Employee getOne(@PathVariable("id") Employee employee) {
        return employee;
    }

    @PostMapping()
    public Employee create(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("{id}")
    public Employee update(
            @PathVariable("id") Employee employeeFromDb,
            @RequestBody Employee employee) {
        BeanUtils.copyProperties(employee, employeeFromDb, "id");
        return employeeFromDb;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Employee employee) {
        employeeService.delete(employee);
    }
}
