package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Department;
import org.eugene.itassets.domain.Employee;
import org.eugene.itassets.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/department")
public class DepartmentController {
    private final EmployeeService employeeService;

    @Autowired
    public DepartmentController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("{id}")
    public List<Employee> getEmployeesByDepartment(@PathVariable("id") Department department) {
        return employeeService.getAllEmployeeByDepartment(department);
    }
}
