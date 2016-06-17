/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.ConversationUser;
import com.cloderia.helion.client.shared.endpoint.ConversationUserEndPoint;
import com.cloderia.helion.client.shared.service.ConversationUserService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ConversationUserEndPointImpl extends
		BaseEntityEndPointImpl<ConversationUser, ConversationUserService> implements ConversationUserEndPoint {
}
