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
public class Api {

	private String name;
	private String apiFileName;
	private String apiTemplate;

	/**
	 * 
	 */
	public Api() {
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
	 * @return the apiFileName
	 */
	public String getApiFileName() {
		return apiFileName;
	}

	/**
	 * @param apiFileName the apiFileName to set
	 */
	@XmlElement
	public void setApiFileName(String apiFileName) {
		this.apiFileName = apiFileName;
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
}