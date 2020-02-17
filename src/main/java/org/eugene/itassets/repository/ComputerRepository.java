package org.eugene.itassets.repository;

import org.eugene.itassets.domain.Computer;
import org.eugene.itassets.domain.Employee;
import org.eugene.itassets.domain.category.ComputerCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComputerRepository extends JpaRepository<Computer, Long> {
    List<Computer> findByName(String name);
    List<Computer> findByComputerCategory(ComputerCategory computerCategory);
    Computer findByEmployee(Employee employee);

    @Query("SELECT max(pc.id) FROM Computer pc")
    Long getMaxId();
}
