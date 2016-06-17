/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.NotificationLevel;
import com.cloderia.helion.client.shared.service.NotificationLevelService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class NotificationLevelServiceImpl extends BaseEntityServiceImpl<NotificationLevel> implements
		NotificationLevelService {

	/**
	 * 
	 */
	public NotificationLevelServiceImpl() {
		super(NotificationLevel.class);
	}
}
