/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.PartyCategory;
import com.cloderia.helion.client.shared.service.PartyCategoryService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PartyCategoryServiceImpl extends BaseEntityServiceImpl<PartyCategory> implements
		PartyCategoryService {

	/**
	 * 
	 */
	public PartyCategoryServiceImpl() {
		super(PartyCategory.class);
	}
}
