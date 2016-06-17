/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Party;
import com.cloderia.helion.client.shared.service.PartyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyServiceImpl extends BaseEntityServiceImpl<Party> implements
		PartyService {

	/**
	 * 
	 */
	public PartyServiceImpl() {
		super(Party.class);
	}
}
