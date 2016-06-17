/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.RelationshipStatus;
import com.cloderia.helion.client.shared.endpoint.RelationshipStatusEndPoint;
import com.cloderia.helion.client.shared.service.RelationshipStatusService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class RelationshipStatusEndPointImpl extends
		BaseEntityEndPointImpl<RelationshipStatus, RelationshipStatusService> implements RelationshipStatusEndPoint {
}
