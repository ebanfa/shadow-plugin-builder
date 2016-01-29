/**
 * 
 */
package com.cloderia.ide.app;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import javax.xml.bind.annotation.XmlElement;

/**
 * @author adrian
 *
 */
public class Entity {

	private String name;
	private String global;
	private String postName;
	private String displayName;
	private String description;
	private String createPageTemplate;
	private String editPageTemplate;
	private String listPageTemplate;
	private String viewPageTemplate;
	private String jsPageTemplate;
	private String apiTemplate;
	private String relatedEntityFieldName;
	private List<Field> fields = new ArrayList<Field>();
	private Map<String, Entity> relatedChildEntities = new HashMap<String, Entity>();

	/**
	 * 
	 */
	public Entity() {
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
	 * @return the createPageTemplate
	 */
	public String getCreatePageTemplate() {
		return createPageTemplate;
	}

	/**
	 * @param createPageTemplate the createPageTemplate to set
	 */
	@XmlElement
	public void setCreatePageTemplate(String createPageTemplate) {
		this.createPageTemplate = createPageTemplate;
	}

	/**
	 * @return the editPageTemplate
	 */
	public String getEditPageTemplate() {
		return editPageTemplate;
	}

	/**
	 * @param editPageTemplate the editPageTemplate to set
	 */
	@XmlElement
	public void setEditPageTemplate(String editPageTemplate) {
		this.editPageTemplate = editPageTemplate;
	}

	/**
	 * @return the viewPageTemplate
	 */
	public String getViewPageTemplate() {
		return viewPageTemplate;
	}

	/**
	 * @param viewPageTemplate the viewPageTemplate to set
	 */
	@XmlElement
	public void setViewPageTemplate(String viewPageTemplate) {
		this.viewPageTemplate = viewPageTemplate;
	}

	/**
	 * @return the listPageTemplate
	 */
	public String getListPageTemplate() {
		return listPageTemplate;
	}

	/**
	 * @param listPageTemplate the listPageTemplate to set
	 */
	@XmlElement
	public void setListPageTemplate(String listPageTemplate) {
		this.listPageTemplate = listPageTemplate;
	}

	/**
	 * @return the jsPageTemplate
	 */
	public String getJsPageTemplate() {
		return jsPageTemplate;
	}

	/**
	 * @param jsPageTemplate the jsPageTemplate to set
	 */
	@XmlElement
	public void setJsPageTemplate(String jsPageTemplate) {
		this.jsPageTemplate = jsPageTemplate;
	}

	/**
	 * @return the apiTemplate
	 */
	public String getApiTemplate() {
		return apiTemplate;
	}

	/**
	 * @param apiTemplate the apiTemplate to set
	 */
	@XmlElement
	public void setApiTemplate(String apiTemplate) {
		this.apiTemplate = apiTemplate;
	}

	/**
	 * @return the name
	 */
	public String getGlobal() {
		return global;
	}

	/**
	 * @param name the name to set
	 */
	@XmlElement
	public void setGlobal(String global) {
		this.global = global;
	}

	/**
	 * @return the name
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param name the name to set
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
	 * @return the name
	 */
	public String getPostName() {
		return postName;
	}

	/**
	 * @param name the name to set
	 */
	@XmlElement
	public void setPostName(String postName) {
		this.postName = postName;
	}

	/**
	 * @return the relatedEntityFieldName
	 */
	public String getRelatedEntityFieldName() {
		return relatedEntityFieldName;
	}

	/**
	 * @param relatedEntityFieldName the relatedEntityFieldName to set
	 */
	public void setRelatedEntityFieldName(String relatedEntityFieldName) {
		this.relatedEntityFieldName = relatedEntityFieldName;
	}

	/**
	 * @return the relatedChildEntities
	 */
	public List<Field> getFields() {
		return fields;
	}

	/**
	 * @param fields the fields to set
	 */
	@XmlElement(name="field")
	public void setFields(List<Field> fields) {
		this.fields = fields;
	}

	/**
	 * @return the relatedChildEntities
	 */
	public Map<String, Entity> getRelatedChildEntities() {
		return relatedChildEntities;
	}

	/**
	 * @param relatedChildEntities the relatedChildEntities to set
	 */
	public void setRelatedChildEntities(Map<String, Entity> relatedChildEntities) {
		this.relatedChildEntities = relatedChildEntities;
	}

}
