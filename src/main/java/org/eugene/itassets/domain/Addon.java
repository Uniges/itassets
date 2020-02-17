package org.eugene.itassets.domain;

import org.eugene.itassets.domain.category.AddonCategory;

import javax.persistence.Entity;

@Entity
public class Addon extends AbstractEntity {
    private AddonCategory addonCategory;

    public Addon() {
    }

    public Addon(String name, String description, AddonCategory addonCategory) {
        super(name, description);
        this.addonCategory = addonCategory;
    }

    public AddonCategory getAddonCategory() {
        return addonCategory;
    }

    public void setAddonCategory(AddonCategory addonCategory) {
        this.addonCategory = addonCategory;
    }
}
