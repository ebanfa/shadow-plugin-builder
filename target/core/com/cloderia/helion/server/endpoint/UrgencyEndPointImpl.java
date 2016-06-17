/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Urgency;
import com.cloderia.helion.client.shared.endpoint.UrgencyEndPoint;
import com.cloderia.helion.client.shared.service.UrgencyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class UrgencyEndPointImpl extends
		BaseEntityEndPointImpl<Urgency, UrgencyService> implements UrgencyEndPoint {
}
