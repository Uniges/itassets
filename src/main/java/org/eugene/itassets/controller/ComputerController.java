package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Computer;
import org.eugene.itassets.domain.category.ComputerCategory;
import org.eugene.itassets.repository.ComputerRepository;
import org.eugene.itassets.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/computer")
public class ComputerController {
    private final ComputerRepository computerRepository;
    private final ComputerService computerService;

    @Autowired
    public ComputerController(ComputerRepository computerRepository, ComputerService computerService) {
        this.computerRepository = computerRepository;
        this.computerService = computerService;
    }

    @GetMapping("{id}")
    public Computer getOne(@PathVariable("id") Computer computer) {
        return computer;
    }

    @GetMapping("/category/{name}")
    public List<Computer> categoryData(@PathVariable String name) {
        return computerRepository.findByComputerCategory(ComputerCategory.valueOf(name));
    }

    @PostMapping()
    public Computer create(@RequestBody Computer computer) {
        return computerService.createPC(computer);
    }

    @PutMapping("{id}")
    public Computer update(
            @PathVariable("id") Computer computerFromDb,
            @RequestBody Computer computer) {
        return computerService.updatePC(computer, computerFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Computer computer) {
        computerRepository.delete(computer);
    }
}
