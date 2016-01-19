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
public class MenuBar {

	List<MenuGroup> menuGroups = new ArrayList<MenuGroup>();

	/**
	 * 
	 */
	public MenuBar() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the menuGroups
	 */
	public List<MenuGroup> getMenuGroups() {
		return menuGroups;
	}

	/**
	 * @param menuGroups the menuGroups to set
	 */
	@XmlElement(name="menuGroup")
	public void setMenuGroups(List<MenuGroup> menuGroups) {
		this.menuGroups = menuGroups;
	}

}