package com.hikmetcakir.service;

import com.hikmetcakir.dto.AdministratorAuthentication;
import com.hikmetcakir.repository.ManagementRepository;
import com.hikmetcakir.util.response.BaseResponse;
import org.springframework.stereotype.Service;

@Service
public class ManagementService {

    private final ManagementRepository managementRepository;

    public ManagementService(ManagementRepository managementRepository) {
        this.managementRepository = managementRepository;
    }

    public BaseResponse hasPermission(AdministratorAuthentication administratorAuthentication) {
        Boolean hasPermission = managementRepository.existsByUsernameAndPassword(administratorAuthentication.getUsername(), administratorAuthentication.getPassword());
        if(!hasPermission) {
            return BaseResponse.createFailBaseResponse("Permission Does Not Exist!");
        }
        return new BaseResponse();
    }
}
