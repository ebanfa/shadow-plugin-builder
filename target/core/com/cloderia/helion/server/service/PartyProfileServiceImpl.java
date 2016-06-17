/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyProfile;
import com.cloderia.helion.client.shared.service.PartyProfileService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyProfileServiceImpl extends BaseEntityServiceImpl<PartyProfile> implements
		PartyProfileService {

	/**
	 * 
	 */
	public PartyProfileServiceImpl() {
		super(PartyProfile.class);
	}
}
