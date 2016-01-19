/**
 * 
 */
package com.cloderia.ide.app;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

/**
 * @author adrian
 *
 */
public class Module {
	
	String name;
		
	List<Page> pages = new ArrayList<Page>();
	List<Entity> entities = new ArrayList<Entity>();

	/**
	 * 
	 */
	public Module() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	@XmlElement
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the pages
	 */
	public List<Page> getPages() {
		return pages;
	}

	/**
	 * @param pages the pages to set
	 */
	@XmlElement(name="page")
	public void setPages(List<Page> pages) {
		this.pages = pages;
	}

	/**
	 * @return the entities
	 */
	public List<Entity> getEntities() {
		return entities;
	}

	/**
	 * @param entities the entities to set
	 */
	@XmlElement(name="entity")
	public void setEntities(List<Entity> entities) {
		this.entities = entities;
	}

}
