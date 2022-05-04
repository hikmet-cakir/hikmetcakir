package com.hikmetcakir.dto;

import java.time.LocalDateTime;

public class SimpleEssay {
    private String title;
    private String content;
    private String subject;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;

    public SimpleEssay() {
    }

    public SimpleEssay(String title, String content, String subject, LocalDateTime createdTime, LocalDateTime updatedTime) {
        this.title = title;
        this.content = content;
        this.subject = subject;
        this.createdTime = createdTime;
        this.updatedTime = updatedTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public LocalDateTime getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(LocalDateTime updatedTime) {
        this.updatedTime = updatedTime;
    }
}
