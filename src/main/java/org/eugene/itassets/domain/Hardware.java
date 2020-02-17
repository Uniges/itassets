package org.eugene.itassets.domain;

import org.eugene.itassets.domain.category.HardwareCategory;

import javax.persistence.Entity;

@Entity
public class Hardware extends AbstractEntity {
    private HardwareCategory hardwareCategory;

    public Hardware() {
    }

    public Hardware(String name, String description, HardwareCategory hardwareCategory) {
        super(name, description);
        this.hardwareCategory = hardwareCategory;
    }

    public HardwareCategory getHardwareCategory() {
        return hardwareCategory;
    }

    public void setHardwareCategory(HardwareCategory hardwareCategory) {
        this.hardwareCategory = hardwareCategory;
    }
}
