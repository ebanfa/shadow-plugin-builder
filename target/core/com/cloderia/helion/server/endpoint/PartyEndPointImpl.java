/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Party;
import com.cloderia.helion.client.shared.endpoint.PartyEndPoint;
import com.cloderia.helion.client.shared.service.PartyService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyEndPointImpl extends
		BaseEntityEndPointImpl<Party, PartyService> implements PartyEndPoint {
}
