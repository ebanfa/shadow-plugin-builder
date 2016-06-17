/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Notification;
import com.cloderia.helion.client.shared.endpoint.NotificationEndPoint;
import com.cloderia.helion.client.shared.service.NotificationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class NotificationEndPointImpl extends
		BaseEntityEndPointImpl<Notification, NotificationService> implements NotificationEndPoint {
}
