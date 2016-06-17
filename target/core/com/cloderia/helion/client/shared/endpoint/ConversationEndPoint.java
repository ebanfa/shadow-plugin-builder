/**
 * 
 */
package com.cloderia.helion.client.shared.endpoint;

import javax.ws.rs.Path;

import com.cloderia.helion.client.shared.model.Conversation;

/**
 * @author Edward Banfa
 *
 */
@Path("/conversation")
public interface ConversationEndPoint extends BaseEntityEndPoint<Conversation> {


}
