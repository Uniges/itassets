package org.eugene.itassets.repository;

import org.eugene.itassets.domain.Addon;
import org.eugene.itassets.domain.category.AddonCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddonRepository extends JpaRepository<Addon, Long> {
    List<Addon> findByName(String name);
    List<Addon> findByAddonCategory(AddonCategory addonCategory);
}
