/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.PartyCategory;
import com.cloderia.helion.client.shared.endpoint.PartyCategoryEndPoint;
import com.cloderia.helion.client.shared.service.PartyCategoryService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PartyCategoryEndPointImpl extends
		BaseEntityEndPointImpl<PartyCategory, PartyCategoryService> implements PartyCategoryEndPoint {
}
