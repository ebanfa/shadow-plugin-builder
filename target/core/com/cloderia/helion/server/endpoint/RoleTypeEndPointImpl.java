/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.RoleType;
import com.cloderia.helion.client.shared.endpoint.RoleTypeEndPoint;
import com.cloderia.helion.client.shared.service.RoleTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class RoleTypeEndPointImpl extends
		BaseEntityEndPointImpl<RoleType, RoleTypeService> implements RoleTypeEndPoint {
}
