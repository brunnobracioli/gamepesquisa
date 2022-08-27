package com.gamepesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamepesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
