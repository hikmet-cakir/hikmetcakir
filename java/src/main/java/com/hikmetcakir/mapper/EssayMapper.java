package com.hikmetcakir.mapper;

import com.hikmetcakir.dto.SimpleEssay;
import com.hikmetcakir.entity.Essay;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface EssayMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "title", target = "title"),
            @Mapping(source = "content", target = "content"),
            @Mapping(source = "subject", target = "subject"),
            @Mapping(source = "createdTime", target = "createdTime"),
            @Mapping(source = "updatedTime", target = "updatedTime")
    })
    SimpleEssay essayToSimpleEssay(Essay essay);

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "title", target = "title"),
            @Mapping(source = "content", target = "content"),
            @Mapping(source = "subject", target = "subject"),
            @Mapping(source = "createdTime", target = "createdTime"),
            @Mapping(source = "updatedTime", target = "updatedTime")
    })
    Essay simpleEssayToEssay(SimpleEssay simpleEssay);
}
