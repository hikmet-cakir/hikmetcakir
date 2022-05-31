package com.hikmetcakir.controller;

import com.hikmetcakir.dto.AdministratorAuthentication;
import com.hikmetcakir.service.ManagementService;
import com.hikmetcakir.util.response.BaseResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/management")
@CrossOrigin
public class ManagementController {

    private final ManagementService managementService;

    public ManagementController(ManagementService managementService) {
        this.managementService = managementService;
    }

    @PostMapping("/has-permission")
    public BaseResponse createEssay(@RequestBody AdministratorAuthentication administratorAuthentication) {
        return managementService.hasPermission(administratorAuthentication);
    }
}
