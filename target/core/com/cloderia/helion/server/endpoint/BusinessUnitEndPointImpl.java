/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.BusinessUnit;
import com.cloderia.helion.client.shared.endpoint.BusinessUnitEndPoint;
import com.cloderia.helion.client.shared.service.BusinessUnitService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class BusinessUnitEndPointImpl extends
		BaseEntityEndPointImpl<BusinessUnit, BusinessUnitService> implements BusinessUnitEndPoint {
}
