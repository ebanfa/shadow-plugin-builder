/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.MessageFiles;
import com.cloderia.helion.client.shared.service.MessageFilesService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class MessageFilesServiceImpl extends BaseEntityServiceImpl<MessageFiles> implements
		MessageFilesService {

	/**
	 * 
	 */
	public MessageFilesServiceImpl() {
		super(MessageFiles.class);
	}
}
