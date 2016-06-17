/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.RelationshipType;
import com.cloderia.helion.client.shared.endpoint.RelationshipTypeEndPoint;
import com.cloderia.helion.client.shared.service.RelationshipTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class RelationshipTypeEndPointImpl extends
		BaseEntityEndPointImpl<RelationshipType, RelationshipTypeService> implements RelationshipTypeEndPoint {
}
