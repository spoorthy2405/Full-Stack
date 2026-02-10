package com.hartford.onetomany.repository;

import com.hartford.onetomany.entity.Policies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository
        extends JpaRepository<Policies, Long> {}
