/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.RelationshipStatus;
import com.cloderia.helion.client.shared.service.RelationshipStatusService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class RelationshipStatusServiceImpl extends BaseEntityServiceImpl<RelationshipStatus> implements
		RelationshipStatusService {

	/**
	 * 
	 */
	public RelationshipStatusServiceImpl() {
		super(RelationshipStatus.class);
	}
}
