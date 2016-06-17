/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyGroup;
import com.cloderia.helion.client.shared.endpoint.PartyGroupEndPoint;
import com.cloderia.helion.client.shared.service.PartyGroupService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyGroupEndPointImpl extends
		BaseEntityEndPointImpl<PartyGroup, PartyGroupService> implements PartyGroupEndPoint {
}
