/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.AcademicLevel;
import com.cloderia.helion.client.shared.service.AcademicLevelService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class AcademicLevelServiceImpl extends BaseEntityServiceImpl<AcademicLevel> implements
		AcademicLevelService {

	/**
	 * 
	 */
	public AcademicLevelServiceImpl() {
		super(AcademicLevel.class);
	}
}
