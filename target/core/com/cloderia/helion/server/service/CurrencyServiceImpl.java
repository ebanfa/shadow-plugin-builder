/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Currency;
import com.cloderia.helion.client.shared.service.CurrencyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class CurrencyServiceImpl extends BaseEntityServiceImpl<Currency> implements
		CurrencyService {

	/**
	 * 
	 */
	public CurrencyServiceImpl() {
		super(Currency.class);
	}
}
