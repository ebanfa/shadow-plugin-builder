/**
 * 
 */
package com.cloderia.ide.app;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;

/**
 * @author adrian
 *
 */
public class Menu {

	private String name;
	private String displayName;
	private String description;
	private String active;
	private String cssClass;
	private String targetType;
	private String target;
	private String targetTemplate;

	/**
	 * 
	 */
	public Menu() {
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
	 * @return the displayName
	 */
	public String getDisplayName() {
		return displayName;
	}

	/**
	 * @param displayName the displayName to set
	 */
	@XmlElement
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
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
	 * @param active the active to set
	 */
	@XmlElement
	public void setActive(String active) {
		this.active = active;
	}

	/**
	 * @return the active
	 */
	public String getActive() {
		return active;
	}
	
	/**
	 * @param cssClass the cssClass to set
	 */
	@XmlElement
	public void setCssClass(String cssClass) {
		this.cssClass = cssClass;
	}

	/**
	 * @return the cssClass
	 */
	public String getCssClass() {
		return cssClass;
	}

	/**
	 * @return the targetType
	 */
	public String getTargetType() {
		return targetType;
	}

	/**
	 * @param targetType the targetType to set
	 */
	@XmlElement
	public void setTargetType(String targetType) {
		this.targetType = targetType;
	}

	/**
	 * @return the target
	 */
	public String getTarget() {
		return target;
	}

	/**
	 * @param target the target to set
	 */
	@XmlElement
	public void setTarget(String target) {
		this.target = target;
	}

	/**
	 * @return the targetTemplate
	 */
	public String getTargetTemplate() {
		return targetTemplate;
	}

	/**
	 * @param targetTemplate the targetTemplate to set
	 */
	@XmlElement
	public void setTargetTemplate(String targetTemplate) {
		this.targetTemplate = targetTemplate;
	}
}