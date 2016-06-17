/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.ContentOrder;
import com.cloderia.helion.client.shared.service.ContentOrderService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class ContentOrderServiceImpl extends BaseEntityServiceImpl<ContentOrder> implements
		ContentOrderService {

	/**
	 * 
	 */
	public ContentOrderServiceImpl() {
		super(ContentOrder.class);
	}
}
