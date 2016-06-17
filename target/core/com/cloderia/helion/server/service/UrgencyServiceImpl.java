/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Urgency;
import com.cloderia.helion.client.shared.service.UrgencyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class UrgencyServiceImpl extends BaseEntityServiceImpl<Urgency> implements
		UrgencyService {

	/**
	 * 
	 */
	public UrgencyServiceImpl() {
		super(Urgency.class);
	}
}
