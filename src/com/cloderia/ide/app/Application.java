/**
 * 
 */
package com.cloderia.ide.app;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author adrian
 *
 */
@XmlRootElement(name="application")
public class Application {
	
	String name;
	String packageName;
	String description;
	String templatesDir;
	String generateSourcesDir;
	MenuBar menuBar;
	List<Module> modules;

	/**
	 * 
	 */
	public Application() {
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
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	@XmlElement
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the packageName
	 */
	public String getPackageName() {
		return packageName;
	}

	/**
	 * @param packageName the packageName to set
	 */
	@XmlElement
	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	/**
	 * @return the templatesDir
	 */
	public String getTemplatesDir() {
		return templatesDir;
	}

	/**
	 * @param templatesDir the templatesDir to set
	 */
	@XmlElement
	public void setTemplatesDir(String templates) {
		this.templatesDir = templates;
	}

	/**
	 * @return the generateSourcesDir
	 */
	public String getGenerateSourcesDir() {
		return generateSourcesDir;
	}

	/**
	 * @param generateSourcesDir the generateSourcesDir to set
	 */
	@XmlElement
	public void setGenerateSourcesDir(String generateSourcesDir) {
		this.generateSourcesDir = generateSourcesDir;
	}

	/**
	 * @return the menuBar
	 */
	public MenuBar getMenuBar() {
		return menuBar;
	}

	/**
	 * @param menuBar the menuBar to set
	 */
	@XmlElement
	public void setMenuBar(MenuBar menuBar) {
		this.menuBar = menuBar;
	}

	/**
	 * @return the modules
	 */
	public List<Module> getModules() {
		return modules;
	}

	/**
	 * @param modules the modules to set
	 */
	@XmlElement(name="module")
	public void setModules(List<Module> modules) {
		this.modules = modules;
	}



}
