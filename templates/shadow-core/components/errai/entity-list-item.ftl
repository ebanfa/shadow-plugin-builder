/**
 * 
 */
package com.cloderia.${application.packageName}.client.local.ui.${module.name}.${entity.name?lower_case};

import javax.inject.Inject;

import org.jboss.errai.ui.shared.api.annotations.DataField;
import org.jboss.errai.ui.shared.api.annotations.Templated;

import com.cloderia.${application.packageName}.client.local.ui.BaseEntityListItemWidget;
import com.cloderia.${application.packageName}.client.shared.model.${entity.name};
import com.google.gwt.user.client.ui.InlineLabel;

/**
 * @author adrian
 *
 */
@Templated("${entity.name?lower_case}-list-item.html#${entity.name?lower_case}-list-item-template")
public class ${entity.name}ListItemWidget extends BaseEntityListItemWidget<${entity.name}, View${entity.name}Page> {

<#list entity.fields as field>
	<#if field.dataColumn == "true">
	@Inject
	@DataField
	private InlineLabel ${field.name};
	</#if>
</#list>
	/**
	 * 
	 */
	public ${entity.name}ListItemWidget() {
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.cloderia.circles.client.local.BaseEntityListItemWidget#doSetModel
	 * (java.lang.Object)
	 */
	@Override
	protected void doSetModel(${entity.name} model) {
		
	}

}
