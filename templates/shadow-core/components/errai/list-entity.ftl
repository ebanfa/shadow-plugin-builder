/**
 * 
 */
package com.cloderia.${application.packageName}.client.local.ui.${module.name}.${entity.name?lower_case};

import java.util.List;

import org.jboss.errai.enterprise.client.jaxrs.MarshallingWrapper;
import org.jboss.errai.ui.nav.client.local.Page;
import org.jboss.errai.ui.nav.client.local.TransitionAnchor;
import org.jboss.errai.ui.shared.api.annotations.Templated;

import com.cloderia.${application.packageName}.client.local.ui.BaseEntityListPage;
import com.cloderia.${application.packageName}.client.shared.model.${entity.name};
import com.cloderia.${application.packageName}.client.shared.endpoint.${entity.name}EndPoint;
import com.google.gwt.http.client.Response;

/**
 * @author adrian
 *
 */
@Page
@Templated("list-${entity.name?lower_case}.html#list-${entity.name?lower_case}-template")
public class List${entity.name}Page extends BaseEntityListPage<${entity.name}, ${entity.name}EndPoint, ${entity.name}ListItemWidget> {
	
	
	/* (non-Javadoc)
	 * @see com.cloderia.circles.client.local.BaseEntityListPage#decodeEntityList(com.google.gwt.http.client.Response)
	 */
	@Override
	protected void decodeEntityList(Response response) {
		entityItems.setItems(MarshallingWrapper.fromJSON(
				response.getText(), List.class, ${entity.name}.class));
	}
}
