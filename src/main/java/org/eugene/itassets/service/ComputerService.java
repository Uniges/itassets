package org.eugene.itassets.service;

import org.eugene.itassets.domain.*;
import org.eugene.itassets.repository.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ComputerService {
    private final ComputerRepository computerRepository;
    private final HardwareRepository hardwareRepository;
    private final SoftwareRepository softwareRepository;
    private final AddonRepository addonRepository;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public ComputerService(ComputerRepository computerRepository, HardwareRepository hardwareRepository,
                           SoftwareRepository softwareRepository, AddonRepository addonRepository,
                           EmployeeRepository employeeRepository) {
        this.computerRepository = computerRepository;
        this.hardwareRepository = hardwareRepository;
        this.softwareRepository = softwareRepository;
        this.addonRepository = addonRepository;
        this.employeeRepository = employeeRepository;
    }

    public Computer updatePC(Computer computer, Computer computerFromDb) {
        // save employee before delete object
        computerFromDb.setEmployee(null);
        // delete old data
        computerRepository.delete(computerFromDb);
        // create new
        return createPC(computer);
    }

    public Computer createPC(Computer computer) {

        List<Hardware> hardwareList = new ArrayList<>();
        List<Software> softwareList = new ArrayList<>();
        List<Addon> addonsList = new ArrayList<>();

        for (Hardware hardware : computer.getHardwareList()) hardwareList.add(hardwareRepository.save(hardware));
        for (Software software : computer.getSoftwareList()) softwareList.add(softwareRepository.save(software));
        for (Addon addon : computer.getAddonList()) addonsList.add(addonRepository.save(addon));

        String nameData = "";

        if (computer.getEmployee() != null) {
            Employee employee = computer.getEmployee();
            nameData = employee.getFirstName() +
                       employee.getLastName() +
                       employee.getMiddleName() +
                       employee.getDepartment().getName();
        }

        Employee emp = null;
        if (!nameData.equals("")) {
            for (Employee employee : employeeRepository.findAll()) {
                if (employee.getFullNameAndDepartment().equals(nameData)) {
                    emp = employee;
                    break;
                }
            }
        }

        computer.setHardwareList(hardwareList);
        computer.setSoftwareList(softwareList);
        computer.setAddonList(addonsList);
        computer.setEmployee(emp);

        return computerRepository.save(computer);
    }
}
