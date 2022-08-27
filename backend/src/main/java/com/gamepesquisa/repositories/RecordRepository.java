package com.gamepesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamepesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
