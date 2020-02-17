package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Hardware;
import org.eugene.itassets.domain.category.HardwareCategory;
import org.eugene.itassets.repository.HardwareRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hardware")
public class HardwareController {
    private final HardwareRepository hardwareRepository;
    @Autowired
    public HardwareController(HardwareRepository hardwareRepository) {
        this.hardwareRepository = hardwareRepository;
    }

    @GetMapping("{id}")
    public Hardware getOne(@PathVariable("id") Hardware hardware) {
        return hardware;
    }

    @PostMapping()
    public Hardware create(@RequestBody Hardware hardware) {
        return hardwareRepository.save(hardware);
    }
    @GetMapping("/category/{name}")
    public List<Hardware> categoryData(@PathVariable String name) {
        return hardwareRepository.findByHardwareCategory(HardwareCategory.valueOf(name));
    }

    @PutMapping("{id}")
    public Hardware update(
            @PathVariable("id") Hardware hardwareFromDb,
            @RequestBody Hardware hardware) {
        BeanUtils.copyProperties(hardware, hardwareFromDb, "id");
        return hardwareFromDb;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Hardware hardware) {
        hardwareRepository.delete(hardware);
    }
}
