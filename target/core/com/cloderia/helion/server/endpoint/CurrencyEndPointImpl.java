/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Currency;
import com.cloderia.helion.client.shared.endpoint.CurrencyEndPoint;
import com.cloderia.helion.client.shared.service.CurrencyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class CurrencyEndPointImpl extends
		BaseEntityEndPointImpl<Currency, CurrencyService> implements CurrencyEndPoint {
}
