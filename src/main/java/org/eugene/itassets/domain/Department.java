package org.eugene.itassets.domain;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class Department extends AbstractEntity {

    public Department() {}

    public Department(String name, String description, Employee director) {
        super(name, description);
        this.director = director;
    }

    @OneToOne
    private Employee director;

    public Employee getDirector() {
        return director;
    }

    public void setDirector(Employee director) {
        this.director = director;
    }
}
