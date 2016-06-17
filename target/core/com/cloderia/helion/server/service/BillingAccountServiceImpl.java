/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.BillingAccount;
import com.cloderia.helion.client.shared.service.BillingAccountService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class BillingAccountServiceImpl extends BaseEntityServiceImpl<BillingAccount> implements
		BillingAccountService {

	/**
	 * 
	 */
	public BillingAccountServiceImpl() {
		super(BillingAccount.class);
	}
}
