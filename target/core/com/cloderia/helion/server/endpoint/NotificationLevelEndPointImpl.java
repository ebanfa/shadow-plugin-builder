/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.NotificationLevel;
import com.cloderia.helion.client.shared.endpoint.NotificationLevelEndPoint;
import com.cloderia.helion.client.shared.service.NotificationLevelService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class NotificationLevelEndPointImpl extends
		BaseEntityEndPointImpl<NotificationLevel, NotificationLevelService> implements NotificationLevelEndPoint {
}
