package com.hikmetcakir.controller;

import com.hikmetcakir.dto.SimpleEssay;
import com.hikmetcakir.service.EssayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * It's used for do to processes related with essay operations
 *
 * @author Hikmet
 * @since 04-05-2022+03:00
 */
@RestController
public class EssayController {
    @Autowired
    private EssayService essayService;

    /**
     * It's used for take essay by essay's id
     *
     * @param id : essay's id
     * @return : if essay find, it takes found essay but if essay didn't find, it throws unchecked exception
     */
    @GetMapping("/find/{id}")
    public SimpleEssay findEssayById(@PathVariable Long id) {
        return essayService.findSimpleEssayById(id);
    }

    /**
     * It's used for create essay
     * if all fields of simple essay are empty, it throws unchecked exception
     *
     * @param simpleEssay : Simple essay to be created
     */
    @PostMapping("/create/essay")
    public void createEssay(@RequestBody SimpleEssay simpleEssay) {
        essayService.createEssay(simpleEssay);
    }
}
