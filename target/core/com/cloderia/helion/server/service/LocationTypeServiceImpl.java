/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.LocationType;
import com.cloderia.helion.client.shared.service.LocationTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class LocationTypeServiceImpl extends BaseEntityServiceImpl<LocationType> implements
		LocationTypeService {

	/**
	 * 
	 */
	public LocationTypeServiceImpl() {
		super(LocationType.class);
	}
}
