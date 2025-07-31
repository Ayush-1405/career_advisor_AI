package com.advisor.repository;

import com.advisor.entity.CareerPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerPathRepository extends JpaRepository<CareerPath, Long> {
    // You can add custom queries here if needed in future
    CareerPath findByTitleIgnoreCase(String title);
}
