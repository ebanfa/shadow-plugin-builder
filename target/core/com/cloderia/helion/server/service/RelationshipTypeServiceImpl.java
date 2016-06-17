/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.RelationshipType;
import com.cloderia.helion.client.shared.service.RelationshipTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class RelationshipTypeServiceImpl extends BaseEntityServiceImpl<RelationshipType> implements
		RelationshipTypeService {

	/**
	 * 
	 */
	public RelationshipTypeServiceImpl() {
		super(RelationshipType.class);
	}
}
