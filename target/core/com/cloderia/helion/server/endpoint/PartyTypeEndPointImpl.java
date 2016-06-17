/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyType;
import com.cloderia.helion.client.shared.endpoint.PartyTypeEndPoint;
import com.cloderia.helion.client.shared.service.PartyTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyTypeEndPointImpl extends
		BaseEntityEndPointImpl<PartyType, PartyTypeService> implements PartyTypeEndPoint {
}
