/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Notification;
import com.cloderia.helion.client.shared.service.NotificationService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class NotificationServiceImpl extends BaseEntityServiceImpl<Notification> implements
		NotificationService {

	/**
	 * 
	 */
	public NotificationServiceImpl() {
		super(Notification.class);
	}
}
