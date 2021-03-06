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
public class Page {

	private String name;
	private String displayName;
	private String description;
	private String jsTemplate;
	private String apiTemplate;
	private String pageTemplate;
	private String viewTemplate;
	private String viewModelTemplate;
	private String viewFilterTemplate;
	private String ajaxRequestProcessorTemplate;

	/**
	 * 
	 */
	public Page() {
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
	 * @return the pageTemplate
	 */
	public String getPageTemplate() {
		return pageTemplate;
	}

	/**
	 * @param pageTemplate the pageTemplate to set
	 */
	@XmlElement
	public void setPageTemplate(String pageTemplate) {
		this.pageTemplate = pageTemplate;
	}

	/**
	 * @return the viewTemplate
	 */
	public String getViewTemplate() {
		return viewTemplate;
	}

	/**
	 * @param viewTemplate the viewTemplate to set
	 */
	@XmlElement
	public void setViewTemplate(String viewTemplate) {
		this.viewTemplate = viewTemplate;
	}

	/**
	 * @return the viewModelTemplate
	 */
	public String getViewModelTemplate() {
		return viewModelTemplate;
	}

	/**
	 * @param viewModelTemplate the viewTemplate to set
	 */
	@XmlElement
	public void setViewModelTemplate(String viewModelTemplate) {
		this.viewModelTemplate = viewModelTemplate;
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
	 * @return the jsTemplate
	 */
	public String getJsTemplate() {
		return jsTemplate;
	}

	/**
	 * @param jsTemplate the jsTemplate to set
	 */
	@XmlElement
	public void setJsTemplate(String jsTemplate) {
		this.jsTemplate = jsTemplate;
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
}
