/**
 * 
 */
package com.cloderia.helion.client.shared.endpoint;

import javax.ws.rs.Path;

import com.cloderia.helion.client.shared.model.Message;

/**
 * @author Edward Banfa
 *
 */
@Path("/message")
public interface MessageEndPoint extends BaseEntityEndPoint<Message> {


}
