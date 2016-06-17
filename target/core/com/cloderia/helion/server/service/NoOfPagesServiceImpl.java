/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.NoOfPages;
import com.cloderia.helion.client.shared.service.NoOfPagesService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class NoOfPagesServiceImpl extends BaseEntityServiceImpl<NoOfPages> implements
		NoOfPagesService {

	/**
	 * 
	 */
	public NoOfPagesServiceImpl() {
		super(NoOfPages.class);
	}
}
