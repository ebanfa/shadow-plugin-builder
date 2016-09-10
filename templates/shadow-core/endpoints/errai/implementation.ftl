/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.${entity.name};
import com.cloderia.helion.client.shared.endpoint.${entity.name}EndPoint;
import com.cloderia.helion.client.shared.service.${entity.name}Service;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ${entity.name}EndPointImpl extends
		BaseEntityEndPointImpl<${entity.name}, ${entity.name}Service> implements ${entity.name}EndPoint {
}
