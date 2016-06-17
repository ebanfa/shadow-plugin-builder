/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Location;
import com.cloderia.helion.client.shared.service.LocationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class LocationServiceImpl extends BaseEntityServiceImpl<Location> implements
		LocationService {

	/**
	 * 
	 */
	public LocationServiceImpl() {
		super(Location.class);
	}
}
