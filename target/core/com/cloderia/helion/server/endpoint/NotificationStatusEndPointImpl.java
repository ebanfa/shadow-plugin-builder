/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.NotificationStatus;
import com.cloderia.helion.client.shared.endpoint.NotificationStatusEndPoint;
import com.cloderia.helion.client.shared.service.NotificationStatusService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class NotificationStatusEndPointImpl extends
		BaseEntityEndPointImpl<NotificationStatus, NotificationStatusService> implements NotificationStatusEndPoint {
}
