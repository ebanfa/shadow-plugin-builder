/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Conversation;
import com.cloderia.helion.client.shared.service.ConversationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class ConversationServiceImpl extends BaseEntityServiceImpl<Conversation> implements
		ConversationService {

	/**
	 * 
	 */
	public ConversationServiceImpl() {
		super(Conversation.class);
	}
}
