/**
 * 
 */
package com.cloderia.ide.app;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.annotation.XmlElement;

/**
 * @author adrian
 *
 */
public class Entity {

	private String name;
	private String global;
	private String postName;
	private String isVirtual;
	private String parentName;
	private String displayName;
	private String description;
	private String viewFilterTemplate;
	private String singleViewTemplate;
	private String createViewTemplate;
	private String listViewTemplate;
	private String createPageTemplate;
	private String editPageTemplate;
	private String listPageTemplate;
	private String viewPageTemplate;
	private String apiTemplate;
	private String ajaxRequestProcessorTemplate;
	private String relatedEntityFieldName;
	private List<Field> fields = new ArrayList<Field>();
	private List<Field> virtualFields = new ArrayList<Field>();
	private Map<String, Field> relatedChildFields = new HashMap<String, Field>();
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
	 * @return the singleViewTemplate
	 */
	public String getSingleViewTemplate() {
		return singleViewTemplate;
	}

	/**
	 * @param singleViewTemplate the singleViewTemplate to set
	 */
	@XmlElement
	public void setSingleViewTemplate(String singleViewTemplate) {
		this.singleViewTemplate = singleViewTemplate;
	}

	/**
	 * @return the viewFilterTemplate
	 */
	public String getViewFilterTemplate() {
		return viewFilterTemplate;
	}

	/**
	 * @param viewFilterTemplate the viewFilterTemplate to set
	 */
	@XmlElement
	public void setViewFilterTemplate(String viewFilterTemplate) {
		this.viewFilterTemplate = viewFilterTemplate;
	}

	/**
	 * @return the createViewTemplate
	 */
	public String getCreateViewTemplate() {
		return createViewTemplate;
	}

	/**
	 * @param createViewTemplate the createViewTemplate to set
	 */
	@XmlElement
	public void setCreateViewTemplate(String createViewTemplate) {
		this.createViewTemplate = createViewTemplate;
	}

	/**
	 * @return the listViewTemplate
	 */
	public String getListViewTemplate() {
		return listViewTemplate;
	}

	/**
	 * @param listViewTemplate the listViewTemplate to set
	 */
	@XmlElement
	public void setListViewTemplate(String listViewTemplate) {
		this.listViewTemplate = listViewTemplate;
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
	 * @return the ajaxRequestProcessorTemplate
	 */
	public String getAjaxRequestProcessorTemplate() {
		return ajaxRequestProcessorTemplate;
	}

	/**
	 * @param ajaxRequestProcessorTemplate the ajaxRequestProcessorTemplate to set
	 */
	@XmlElement
	public void setAjaxRequestProcessorTemplate(String ajaxRequestProcessorTemplate) {
		this.ajaxRequestProcessorTemplate = ajaxRequestProcessorTemplate;
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
	 * @return the parentName	
	 */
	public String getParentName() {
		return parentName;
	}

	/**
	 * @param parentName the parentName to set
	 */
	@XmlElement
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	/**
	 * @return the isVirtual
	 */
	public String getIsVirtual() {
		return isVirtual;
	}

	/**
	 * @param isVirtual the isVirtual to set
	 */
	@XmlElement
	public void setIsVirtual(String isVirtual) {
		this.isVirtual = isVirtual;
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
	 * @return the virtualFields
	 */
	public List<Field> getVirtualFields() {
		return virtualFields;
	}

	/**
	 * @param virtualFields the virtualFields to set
	 */
	public void setVirtualFields(List<Field> virtualFields) {
		this.virtualFields = virtualFields;
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
	 * @return the relatedChildFields
	 */
	public Map<String, Field> getRelatedChildFields() {
		return relatedChildFields;
	}

	/**
	 * @param relatedChildFields the relatedChildFields to set
	 */
	public void setRelatedChildFields(Map<String, Field> relatedChildFields) {
		this.relatedChildFields = relatedChildFields;
	}

}
