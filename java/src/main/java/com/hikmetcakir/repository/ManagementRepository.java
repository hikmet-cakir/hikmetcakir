package com.hikmetcakir.repository;

import com.hikmetcakir.entity.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagementRepository extends JpaRepository<Administrator, Long> {
    Boolean existsByUsernameAndPassword(String username, String password);
}
