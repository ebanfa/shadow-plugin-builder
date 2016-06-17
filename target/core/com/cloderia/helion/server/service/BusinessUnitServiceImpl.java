/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.BusinessUnit;
import com.cloderia.helion.client.shared.service.BusinessUnitService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class BusinessUnitServiceImpl extends BaseEntityServiceImpl<BusinessUnit> implements
		BusinessUnitService {

	/**
	 * 
	 */
	public BusinessUnitServiceImpl() {
		super(BusinessUnit.class);
	}
}
