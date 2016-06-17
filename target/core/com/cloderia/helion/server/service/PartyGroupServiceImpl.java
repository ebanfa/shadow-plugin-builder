/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyGroup;
import com.cloderia.helion.client.shared.service.PartyGroupService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyGroupServiceImpl extends BaseEntityServiceImpl<PartyGroup> implements
		PartyGroupService {

	/**
	 * 
	 */
	public PartyGroupServiceImpl() {
		super(PartyGroup.class);
	}
}
