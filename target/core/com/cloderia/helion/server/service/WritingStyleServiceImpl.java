/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.WritingStyle;
import com.cloderia.helion.client.shared.service.WritingStyleService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class WritingStyleServiceImpl extends BaseEntityServiceImpl<WritingStyle> implements
		WritingStyleService {

	/**
	 * 
	 */
	public WritingStyleServiceImpl() {
		super(WritingStyle.class);
	}
}
