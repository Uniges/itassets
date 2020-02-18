package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Software;
import org.eugene.itassets.domain.category.SoftwareCategory;
import org.eugene.itassets.repository.SoftwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/software")
public class SoftwareController {
    private final SoftwareRepository softwareRepository;
    @Autowired
    public SoftwareController(SoftwareRepository softwareRepository) {
        this.softwareRepository = softwareRepository;
    }

    @GetMapping("{id}")
    public Software getOne(@PathVariable("id") Software software) {
        return software;
    }

    @GetMapping("/category/{name}")
    public List<Software> categoryData(@PathVariable String name) {
        return softwareRepository.findBySoftwareCategory(SoftwareCategory.valueOf(name));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Software software) {
        softwareRepository.delete(software);
    }
}
