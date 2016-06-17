/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyRole;
import com.cloderia.helion.client.shared.service.PartyRoleService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyRoleServiceImpl extends BaseEntityServiceImpl<PartyRole> implements
		PartyRoleService {

	/**
	 * 
	 */
	public PartyRoleServiceImpl() {
		super(PartyRole.class);
	}
}
