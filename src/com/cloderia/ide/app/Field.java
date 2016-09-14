/**
 * 
 */
package com.cloderia.ide.app;

import javax.xml.bind.annotation.XmlElement;

/**
 * @author adrian
 *
 */
public class Field {

	private String name;
	private String nickName;
	private String javaName;
	private String dataType;
	private String size;
	private String isVisible;
	private String isFormField;
	private String required;
	private String createField;
	private String editField;
	private String viewField;
	private String listField;
	private String dataColumn;
	private String description;
	private String displayName;
	private String optionsProvider;
	private String relationshipField;
	
	/**
	 * 
	 */
	public Field() {
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
	 * @return the nickName
	 */
	public String getNickName() {
		return nickName;
	}

	/**
	 * @param nickName the nickName to set
	 */
	@XmlElement
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	/**
	 * @return the isVisible
	 */
	public String getIsVisible() {
		return isVisible;
	}

	/**
	 * @param isVisible the isVisible to set
	 */
	@XmlElement
	public void setIsVisible(String isVisible) {
		this.isVisible = isVisible;
	}

	/**
	 * @return the isFormField
	 */
	public String getIsFormField() {
		return isFormField;
	}

	/**
	 * @param isFormField the isFormField to set
	 */
	@XmlElement
	public void setIsFormField(String isFormField) {
		this.isFormField = isFormField;
	}


	/**
	 * @return the createField
	 */
	public String getCreateField() {
		return createField;
	}

	/**
	 * @param createField the dataType to set
	 */
	@XmlElement
	public void setCreateField(String createField) {
		this.createField = createField;
	}

	/**
	 * @return the editField
	 */
	public String getEditField() {
		return editField;
	}

	/**
	 * @param editField the dataType to set
	 */
	@XmlElement
	public void setEditField(String editField) {
		this.editField = editField;
	}

	/**
	 * @return the viewField
	 */
	public String getViewField() {
		return viewField;
	}

	/**
	 * @param viewField the dataType to set
	 */
	@XmlElement
	public void setViewField(String viewField) {
		this.viewField = viewField;
	}


	/**
	 * @return the listField
	 */
	public String getListField() {
		return listField;
	}

	/**
	 * @param listField the dataType to set
	 */
	@XmlElement
	public void setListField(String listField) {
		this.listField = listField;
	}

	/**
	 * @return the dataType
	 */
	public String getDataType() {
		return dataType;
	}

	/**
	 * @param dataType the dataType to set
	 */
	@XmlElement
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	/**
	 * @return the size
	 */
	public String getSize() {
		return size;
	}

	/**
	 * @param size the size to set
	 */
	@XmlElement
	public void setSize(String size) {
		this.size = size;
	}

    /**
	 * @return the dataType
	 */
	public String getRequired() {
		return required;
	}

	/**
	 * @param dataType the dataType to set
	 */
	@XmlElement
	public void setRequired(String required) {
		this.required = required;
	}

	/**
	 * @return the dataColumn
	 */
	public String getDataColumn() {
		return dataColumn;
	}

	/**
	 * @param dataColumn the dataColumn to set
	 */
	@XmlElement
	public void setDataColumn(String dataColumn) {
		this.dataColumn = dataColumn;
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
	 * @return the relationshipField
	 */
	public String getRelationshipField() {
		return relationshipField;
	}

	/**
	 * @param relationshipField the relationshipField to set
	 */
	@XmlElement
	public void setRelationshipField(String relationshipField) {
		this.relationshipField = relationshipField;
	}

	/**
	 * @return the javaName
	 */
	public String getJavaName() {
		return javaName;
	}

	/**
	 * @param javaName the javaName to set
	 */
	public void setJavaName(String javaName) {
		this.javaName = javaName;
	}

}
