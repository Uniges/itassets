package org.eugene.itassets.repository;

import org.eugene.itassets.domain.Software;
import org.eugene.itassets.domain.category.SoftwareCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SoftwareRepository extends JpaRepository<Software, Long> {
    List<Software> findByName(String name);
    List<Software> findBySoftwareCategory(SoftwareCategory softwareCategory);
}
