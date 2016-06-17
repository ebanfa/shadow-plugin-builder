/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Message;
import com.cloderia.helion.client.shared.service.MessageService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class MessageServiceImpl extends BaseEntityServiceImpl<Message> implements
		MessageService {

	/**
	 * 
	 */
	public MessageServiceImpl() {
		super(Message.class);
	}
}
