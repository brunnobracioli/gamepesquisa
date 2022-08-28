package com.gamepesquisa.service;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamepesquisa.dto.RecordDto;
import com.gamepesquisa.dto.RecordInsertDto;
import com.gamepesquisa.entities.Game;
import com.gamepesquisa.entities.Record;
import com.gamepesquisa.repositories.GameRepository;
import com.gamepesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDto insert(RecordInsertDto dto) {
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		//getOne = instancia um objeto do tipo relacionado que você precisa, porem ele não toca o banco de dados, apenas quando salvar ele irá salvar o record com o que eu salvei.
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		return new RecordDto(entity);
	}

}
