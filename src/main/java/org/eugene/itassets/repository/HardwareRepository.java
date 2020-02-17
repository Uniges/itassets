package org.eugene.itassets.repository;

import org.eugene.itassets.domain.Hardware;
import org.eugene.itassets.domain.category.HardwareCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HardwareRepository extends JpaRepository<Hardware, Long> {
    List<Hardware> findByName(String name);
    List<Hardware> findByHardwareCategory(HardwareCategory hardwareCategory);
}
