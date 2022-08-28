package com.gamepesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gamepesquisa.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
