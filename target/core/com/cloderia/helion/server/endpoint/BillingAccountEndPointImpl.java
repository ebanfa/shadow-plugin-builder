/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.BillingAccount;
import com.cloderia.helion.client.shared.endpoint.BillingAccountEndPoint;
import com.cloderia.helion.client.shared.service.BillingAccountService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class BillingAccountEndPointImpl extends
		BaseEntityEndPointImpl<BillingAccount, BillingAccountService> implements BillingAccountEndPoint {
}
