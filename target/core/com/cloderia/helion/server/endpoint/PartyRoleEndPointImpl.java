/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyRole;
import com.cloderia.helion.client.shared.endpoint.PartyRoleEndPoint;
import com.cloderia.helion.client.shared.service.PartyRoleService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyRoleEndPointImpl extends
		BaseEntityEndPointImpl<PartyRole, PartyRoleService> implements PartyRoleEndPoint {
}
