/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Business;
import com.cloderia.helion.client.shared.service.BusinessService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class BusinessServiceImpl extends BaseEntityServiceImpl<Business> implements
		BusinessService {

	/**
	 * 
	 */
	public BusinessServiceImpl() {
		super(Business.class);
	}
}
