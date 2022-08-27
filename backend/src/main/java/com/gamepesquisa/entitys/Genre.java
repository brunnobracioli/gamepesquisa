package com.gamepesquisa.entitys;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Genre implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	//isso é uma associação de classes, um genero está associado a multiplos games.
	private List<Game> games = new ArrayList<>();
	
	public Genre() {
		
	}
	
	
	public Genre(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public List<Game> getGames() {
		return games;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id, name);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Genre other = (Genre) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name);
	}
	
	
	
	

}
