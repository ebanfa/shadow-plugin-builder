/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyRelationship;
import com.cloderia.helion.client.shared.service.PartyRelationshipService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyRelationshipServiceImpl extends BaseEntityServiceImpl<PartyRelationship> implements
		PartyRelationshipService {

	/**
	 * 
	 */
	public PartyRelationshipServiceImpl() {
		super(PartyRelationship.class);
	}
}
