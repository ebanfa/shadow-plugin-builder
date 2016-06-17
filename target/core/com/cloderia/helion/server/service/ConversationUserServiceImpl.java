/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.ConversationUser;
import com.cloderia.helion.client.shared.service.ConversationUserService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class ConversationUserServiceImpl extends BaseEntityServiceImpl<ConversationUser> implements
		ConversationUserService {

	/**
	 * 
	 */
	public ConversationUserServiceImpl() {
		super(ConversationUser.class);
	}
}
