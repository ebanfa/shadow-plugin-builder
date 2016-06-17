/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyProfile;
import com.cloderia.helion.client.shared.endpoint.PartyProfileEndPoint;
import com.cloderia.helion.client.shared.service.PartyProfileService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyProfileEndPointImpl extends
		BaseEntityEndPointImpl<PartyProfile, PartyProfileService> implements PartyProfileEndPoint {
}
