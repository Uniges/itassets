package org.eugene.itassets.domain;

import org.eugene.itassets.domain.category.SoftwareCategory;
import javax.persistence.Entity;

@Entity
public class Software extends AbstractEntity {
    private SoftwareCategory softwareCategory;

    public Software() {
    }

    public Software(String name, String description, SoftwareCategory softwareCategory) {
        super(name, description);
        this.softwareCategory = softwareCategory;
    }

    public SoftwareCategory getSoftwareCategory() {
        return softwareCategory;
    }

    public void setSoftwareCategory(SoftwareCategory softwareCategory) {
        this.softwareCategory = softwareCategory;
    }
}
