/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.LocationType;
import com.cloderia.helion.client.shared.endpoint.LocationTypeEndPoint;
import com.cloderia.helion.client.shared.service.LocationTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class LocationTypeEndPointImpl extends
		BaseEntityEndPointImpl<LocationType, LocationTypeService> implements LocationTypeEndPoint {
}
