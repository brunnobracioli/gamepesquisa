package com.gamepesquisa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamepesquisa.dto.GameDto;
import com.gamepesquisa.entities.Game;
import com.gamepesquisa.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository repository;
	
	@Transactional(readOnly = true)
	//metodo que busca um game no repository e converte em uma lista de GameDTO
	public List<GameDto> findAll(){
		List<Game> list = repository.findAll();
		return list.stream().map(x -> new GameDto(x)).collect(Collectors.toList());
	}
	

}
