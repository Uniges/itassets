package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Addon;
import org.eugene.itassets.domain.category.AddonCategory;
import org.eugene.itassets.repository.AddonRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/addon")
public class AddonController {
    private final AddonRepository addonRepository;
    @Autowired
    public AddonController(AddonRepository addonRepository) {
        this.addonRepository = addonRepository;
    }

    @GetMapping("{id}")
    public Addon getOne(@PathVariable("id") Addon addon) {
        return addon;
    }

    @GetMapping("/category/{name}")
    public List<Addon> categoryData(@PathVariable String name) {
        return addonRepository.findByAddonCategory(AddonCategory.valueOf(name));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Addon addon) {
        addonRepository.delete(addon);
    }
}
