package com.hikmetcakir.controller;

import com.hikmetcakir.dto.SimpleEssay;
import com.hikmetcakir.service.EssayService;
import com.hikmetcakir.util.response.BaseResponse;
import org.springframework.web.bind.annotation.*;


/**
 * It's used for do to processes related with essay operations
 *
 * @author Hikmet
 * @since 04-05-2022+03:00
 */
@RestController
@RequestMapping("/essay")
@CrossOrigin
public class EssayController {

    private final EssayService essayService;

    public EssayController(EssayService essayService) {
        this.essayService = essayService;
    }

    /**
     * It's used for take all essays
     *
     * @param category : exist essays' category information
     * @return BaseResponse : It returns all exist Essays
     */
    @GetMapping("/find/category/{category}")
    public BaseResponse findEssaysByCategory(@PathVariable String category) {
        return essayService.findEssaysByCategory(category);
    }

    /**
     * It's used for take all essays
     *
     * @return : BaseResponse with all exist Essays
     */
    @GetMapping("/find/all")
    public BaseResponse findAllEssays() {
        return essayService.findAllEssay();
    }

    /**
     * It's used for take essay by essay's id
     *
     * @param id : essay's id
     * @return : if essay find, it takes found essay but if essay didn't find, it throws unchecked exception
     */
    @GetMapping("/find/{id}")
    public BaseResponse findEssayById(@PathVariable Long id) {
        return essayService.findSimpleEssayById(id);
    }

    /**
     * It's used for create essay
     * if all fields of simple essay are empty, it throws unchecked exception
     *
     * @param simpleEssay : Simple essay to be created
     */
    @PostMapping("/create")
    public BaseResponse createEssay(@RequestBody SimpleEssay simpleEssay) {
        return essayService.createEssay(simpleEssay);
    }

    /**
     * It's used for update essay
     * If simpleEssay's id is null, It throws unchecked exception
     * If Essay corresponding to simpleEssay's id doesn't exist, It throws unchecked exception
     *
     *
     * @param simpleEssay : Object to be update
     */
    @PutMapping("/update/{id}")
    public BaseResponse updateEssay(@PathVariable Long id, @RequestBody SimpleEssay simpleEssay) {
        return essayService.updateEssay(id, simpleEssay);
    }

    /**
     * It's used for delete essay
     * If simpleEssay's id is null, It throws unchecked exception
     * If Essay corresponding to simpleEssay's id doesn't exist, It throws unchecked exception
     *
     * @param id : Object to be delete
     */
    @DeleteMapping("/delete/{id}")
    public BaseResponse deleteEssayById(@PathVariable Long id) {
        return essayService.deleteEssayById(id);
    }
}
