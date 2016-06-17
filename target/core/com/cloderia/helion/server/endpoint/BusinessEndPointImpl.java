/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Business;
import com.cloderia.helion.client.shared.endpoint.BusinessEndPoint;
import com.cloderia.helion.client.shared.service.BusinessService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class BusinessEndPointImpl extends
		BaseEntityEndPointImpl<Business, BusinessService> implements BusinessEndPoint {
}
