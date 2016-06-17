/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyRelationship;
import com.cloderia.helion.client.shared.endpoint.PartyRelationshipEndPoint;
import com.cloderia.helion.client.shared.service.PartyRelationshipService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyRelationshipEndPointImpl extends
		BaseEntityEndPointImpl<PartyRelationship, PartyRelationshipService> implements PartyRelationshipEndPoint {
}
