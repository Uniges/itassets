package org.eugene.itassets.domain;

import org.eugene.itassets.domain.category.ComputerCategory;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Computer extends AbstractEntity {
    private ComputerCategory computerCategory;

    public Computer() {}

    public Computer(String name, String description, ComputerCategory computerCategory) {
        super(name, description);
        this.computerCategory = computerCategory;
    }

    @OneToOne()
    private Employee employee;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Hardware> hardwareList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Software> softwareList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Addon> addonList = new ArrayList<>();

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public ComputerCategory getComputerCategory() {
        return computerCategory;
    }

    public void setComputerCategory(ComputerCategory computerCategory) {
        this.computerCategory = computerCategory;
    }

    public List<Addon> getAddonList() {
        return addonList;
    }

    public void setAddonList(List<Addon> addonList) {
        this.addonList = addonList;
    }

    public List<Software> getSoftwareList() {
        return softwareList;
    }

    public void setSoftwareList(List<Software> softwareList) {
        this.softwareList = softwareList;
    }

    public List<Hardware> getHardwareList() {
        return hardwareList;
    }

    public void setHardwareList(List<Hardware> hardwareList) {
        this.hardwareList = hardwareList;
    }
}
