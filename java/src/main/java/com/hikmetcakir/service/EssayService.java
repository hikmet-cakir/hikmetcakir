package com.hikmetcakir.service;

import com.hikmetcakir.dto.SimpleEssay;
import com.hikmetcakir.entity.Essay;
import com.hikmetcakir.mapper.EssayMapper;
import com.hikmetcakir.repository.EssayRepository;
import com.hikmetcakir.util.response.BaseResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * It's used for only essay operations
 *
 * @author Hikmet
 * @since  05-05-2022+03:00
 */
@Service
public class EssayService {
    private final EssayRepository essayRepository;
    private final EssayMapper essayMapper;

    public EssayService(EssayRepository essayRepository, EssayMapper essayMapper) {
        this.essayRepository = essayRepository;
        this.essayMapper = essayMapper;
    }

    public BaseResponse findSimpleEssayById(Long id) {
        Optional<Essay> essay = essayRepository.findById(id);
        if(essay.isEmpty()) {
            return BaseResponse.createFailBaseResponse("Essay Not Found!");
        }
        SimpleEssay simpleEssay = essayMapper.essayToSimpleEssay(essay.get());
        return BaseResponse.createSuccessBaseResponse(simpleEssay);
    }

    public BaseResponse createEssay(SimpleEssay simpleEssay) {
        Essay essay = essayMapper.simpleEssayToEssay(simpleEssay);
        essayRepository.save(essay);
        return new BaseResponse();
    }

    public BaseResponse updateEssay(Long id, SimpleEssay simpleEssay) {
        if(id == null) {
            return BaseResponse.createFailBaseResponse("Id Mustn't Be Null!");
        }
        Optional<Essay> essayById = essayRepository.findById(id);
        if(essayById.isEmpty()) {
            return BaseResponse.createFailBaseResponse("Essay Wasn't Found!");
        }
        Essay convertedEssay = essayMapper.simpleEssayToEssay(simpleEssay);
        convertedEssay.setId(id);
        essayRepository.save(convertedEssay);
        return new BaseResponse();
    }

    public BaseResponse deleteEssayById(Long id) {
        if(id == null) {
            return BaseResponse.createFailBaseResponse("Id Mustn't Be Null!");
        }
        Optional<Essay> essayById = essayRepository.findById(id);
        if(essayById.isEmpty()) {
            return BaseResponse.createFailBaseResponse("Essay Corresponding to Id Wasn't Found!");
        }
        essayRepository.deleteById(id);
        return new BaseResponse();
    }

    public BaseResponse findAllEssay() {
        List<Essay> allEssays = essayRepository.findAll();
        if(allEssays.isEmpty()) {
            new BaseResponse("Any Essay was not Found!", "SUCCESS", "0", null);
        }
        return BaseResponse.createSuccessBaseResponse(allEssays);
    }

    public BaseResponse findEssaysByCategory(String category) {
        List<Essay> essays = essayRepository.findBySubjectOrderByCreatedTimeDesc(category);
        if(essays.isEmpty()) {
            return new BaseResponse();
        }
        List<SimpleEssay> simpleEssays = essays.stream()
                .map(essayMapper::essayToSimpleEssay)
                .collect(Collectors.toList());
        return BaseResponse.createSuccessBaseResponse(simpleEssays);
    }
}
