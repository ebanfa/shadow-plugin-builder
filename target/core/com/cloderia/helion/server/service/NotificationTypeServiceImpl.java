/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.NotificationType;
import com.cloderia.helion.client.shared.service.NotificationTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class NotificationTypeServiceImpl extends BaseEntityServiceImpl<NotificationType> implements
		NotificationTypeService {

	/**
	 * 
	 */
	public NotificationTypeServiceImpl() {
		super(NotificationType.class);
	}
}
