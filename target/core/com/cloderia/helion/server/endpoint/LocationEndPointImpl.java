/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Location;
import com.cloderia.helion.client.shared.endpoint.LocationEndPoint;
import com.cloderia.helion.client.shared.service.LocationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class LocationEndPointImpl extends
		BaseEntityEndPointImpl<Location, LocationService> implements LocationEndPoint {
}
