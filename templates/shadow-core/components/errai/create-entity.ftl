/**
 * 
 */
package com.cloderia.${application.packageName}.client.local.ui.${module.name}.${entity.name?lower_case};

import javax.inject.Inject;

import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.shared.api.annotations.Bound;
import org.jboss.errai.ui.shared.api.annotations.DataField;
import org.jboss.errai.ui.shared.api.annotations.Templated;

import com.cloderia.${application.packageName}.client.local.ui.BaseEntityCreatePage;
import com.cloderia.${application.packageName}.client.shared.model.${entity.name};
import com.cloderia.${application.packageName}.client.shared.endpoint.${entity.name}EndPoint;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.datepicker.client.DateBox;

/**
 * @author adrian
 *
 */
@Page
@Templated("create-${entity.name?lower_case}.html#create-${entity.name?lower_case}-template")
public class Create${entity.name}Page extends
		BaseEntityCreatePage<${entity.name}, ${entity.name}EndPoint, List${entity.name}Page, Edit${entity.name}Page> {
<#list entity.fields as field>
	<#if field.dataType == "text">
	
	@Inject
	@Bound
	@DataField
	private TextBox ${field.name};
	<#elseif field.dataType == "large_text">
	
	@Inject
	@Bound
	@DataField
	private TextBox ${field.name};
	<#elseif field.dataType == "integer">
	
	@Inject
	@Bound
	@DataField
	private TextBox ${field.name};
	<#elseif field.dataType == "decimal">
	
	@Inject
	@Bound
	@DataField
	private TextBox ${field.name};
	<#elseif field.dataType == "date">
	
	@Inject
	@Bound
	@DataField
	private DateBox ${field.name};
	<#elseif field.dataType == "datetime">
	
	@Inject
	@Bound
	@DataField
	private DateBox ${field.name};
	<#elseif field.dataType == "char">
	<#else>
	</#if>
</#list>
	

}
