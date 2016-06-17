/**
 * 
 */
package com.cloderia.helion.client.shared.endpoint;

import javax.ws.rs.Path;

import com.cloderia.helion.client.shared.model.Currency;

/**
 * @author Edward Banfa
 *
 */
@Path("/currency")
public interface CurrencyEndPoint extends BaseEntityEndPoint<Currency> {


}
