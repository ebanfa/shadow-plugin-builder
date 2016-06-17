/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.NotificationStatus;
import com.cloderia.helion.client.shared.service.NotificationStatusService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class NotificationStatusServiceImpl extends BaseEntityServiceImpl<NotificationStatus> implements
		NotificationStatusService {

	/**
	 * 
	 */
	public NotificationStatusServiceImpl() {
		super(NotificationStatus.class);
	}
}
