/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.NotificationType;
import com.cloderia.helion.client.shared.endpoint.NotificationTypeEndPoint;
import com.cloderia.helion.client.shared.service.NotificationTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class NotificationTypeEndPointImpl extends
		BaseEntityEndPointImpl<NotificationType, NotificationTypeService> implements NotificationTypeEndPoint {
}
