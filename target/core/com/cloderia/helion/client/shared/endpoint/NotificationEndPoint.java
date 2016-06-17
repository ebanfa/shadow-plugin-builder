/**
 * 
 */
package com.cloderia.helion.client.shared.endpoint;

import javax.ws.rs.Path;

import com.cloderia.helion.client.shared.model.Notification;

/**
 * @author Edward Banfa
 *
 */
@Path("/notification")
public interface NotificationEndPoint extends BaseEntityEndPoint<Notification> {


}
