/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Message;
import com.cloderia.helion.client.shared.endpoint.MessageEndPoint;
import com.cloderia.helion.client.shared.service.MessageService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class MessageEndPointImpl extends
		BaseEntityEndPointImpl<Message, MessageService> implements MessageEndPoint {
}
