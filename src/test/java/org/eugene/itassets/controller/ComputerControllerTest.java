package org.eugene.itassets.controller;

import org.eugene.itassets.domain.Computer;
import org.eugene.itassets.domain.category.ComputerCategory;
import org.eugene.itassets.repository.ComputerRepository;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ComputerControllerTest {
    @Autowired
    private ComputerController computerController;
    @Autowired
    private ComputerRepository computerRepository;

    @Test
    @BeforeAll
    public void beansExist() throws Exception {
        assertThat(computerController).isNotNull();
        assertThat(computerRepository).isNotNull();
    }

    @Test
    public void createUpdateDelete() {
        // Create new computer
        Computer newComputer = new Computer("PC #1", "PC info #1", ComputerCategory.PC);
        Computer createdComputer = computerController.create(newComputer);
        Computer receivedComputer = computerController.getOne(createdComputer);
        assertEquals(createdComputer, receivedComputer);

        // Update created computer
        Optional<Computer> computerFromBD = computerRepository.findById(computerRepository.getMaxId());
        String updateName = "PC #2";
        String updateDescription = "PC info #2";
        ComputerCategory updateComputerCategory = ComputerCategory.NOTEBOOK;

        Computer updateComputerData = new Computer(updateName, updateDescription, updateComputerCategory);

        computerController.update(computerFromBD.get(), updateComputerData);

        Computer updatedComputer = computerRepository.findById(computerRepository.getMaxId()).get();

        assertThat(updatedComputer.getName().equals(updateName));
        assertThat(updatedComputer.getDescription().equals(updateDescription));
        assertThat(updatedComputer.getComputerCategory().equals(updateComputerCategory));

        // Delete created computer
        Long updatedComputerId = updatedComputer.getId();
        computerController.delete(updatedComputer);
        assertFalse(computerRepository.findById(updatedComputerId).isPresent());
    }
}
