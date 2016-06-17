/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.RoleType;
import com.cloderia.helion.client.shared.service.RoleTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class RoleTypeServiceImpl extends BaseEntityServiceImpl<RoleType> implements
		RoleTypeService {

	/**
	 * 
	 */
	public RoleTypeServiceImpl() {
		super(RoleType.class);
	}
}
