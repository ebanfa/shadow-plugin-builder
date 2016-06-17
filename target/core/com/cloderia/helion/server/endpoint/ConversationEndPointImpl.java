/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Conversation;
import com.cloderia.helion.client.shared.endpoint.ConversationEndPoint;
import com.cloderia.helion.client.shared.service.ConversationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ConversationEndPointImpl extends
		BaseEntityEndPointImpl<Conversation, ConversationService> implements ConversationEndPoint {
}
