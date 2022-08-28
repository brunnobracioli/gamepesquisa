package com.gamepesquisa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamepesquisa.dto.RecordDto;
import com.gamepesquisa.dto.RecordInsertDto;
import com.gamepesquisa.service.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordController {
	
	@Autowired
	private RecordService service;
	
	@PostMapping
	public ResponseEntity<RecordDto> insert(@RequestBody RecordInsertDto dto){
		RecordDto newDto = service.insert(dto);
		return ResponseEntity.ok().body(newDto);	
	}

}
