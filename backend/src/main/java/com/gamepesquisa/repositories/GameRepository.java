package com.gamepesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamepesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
