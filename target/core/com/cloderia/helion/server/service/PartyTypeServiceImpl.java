/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyType;
import com.cloderia.helion.client.shared.service.PartyTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyTypeServiceImpl extends BaseEntityServiceImpl<PartyType> implements
		PartyTypeService {

	/**
	 * 
	 */
	public PartyTypeServiceImpl() {
		super(PartyType.class);
	}
}
