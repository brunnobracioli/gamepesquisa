package com.gamepesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gamepesquisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

	@Query("SELECT obj FROM Record obj WHERE "
			+ "(coalesce(:minDate, null) IS NULL OR obj.moment >= :minDate) AND "
			+ "(coalesce(:maxDate, null) IS NULL OR obj.moment <= :maxDate)")
	Page<Record> findByMoments(Instant minDate, Instant maxDate, Pageable pageRequest);

	
	
	/*
		observações: 
		
		- @Query utiliza uma linguagem Jpql, é parecida com a Sql, porem adaptada para o JPA, que é um paradigma de orientação a objetos;
		- Repositorio não conhece DTO, ele conhece apenas entidades, nesse caso não podemos retornar uma lista de RecordDto;
		- Utilizamos Page ao inves de list, então precisamos mudar para Page os metodos que irão retornar a busca.
		- Mudamos o tipo de parametro PageRequest para Pageable que é um objeto mais genérico;
		- Utilizamos coalesce(:minDate, null) para garantir que dados nulos serão aceitos no PostgreSql
	 */
}
