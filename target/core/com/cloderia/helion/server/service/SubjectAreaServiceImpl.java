/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.SubjectArea;
import com.cloderia.helion.client.shared.service.SubjectAreaService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class SubjectAreaServiceImpl extends BaseEntityServiceImpl<SubjectArea> implements
		SubjectAreaService {

	/**
	 * 
	 */
	public SubjectAreaServiceImpl() {
		super(SubjectArea.class);
	}
}
