package com.hikmetcakir.service;

import com.hikmetcakir.dto.SimpleEssay;
import com.hikmetcakir.entity.Essay;
import com.hikmetcakir.mapper.EssayMapper;
import com.hikmetcakir.repository.EssayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EssayService {

    @Autowired
    private EssayRepository essayRepository;
    @Autowired
    private EssayMapper essayMapper;

    public SimpleEssay findSimpleEssayById(Long id) {
        Optional<Essay> essay = essayRepository.findById(id);
        if(essay.isEmpty()) {
            throw new RuntimeException("Essay Not Found!");
        }
        return essayMapper.essayToSimpleEssay(essay.get());
    }

    public void createEssay(SimpleEssay simpleEssay) {
        Essay essay = essayMapper.simpleEssayToEssay(simpleEssay);
        essay.setId(0L);
        essayRepository.save(essay);
    }
}
