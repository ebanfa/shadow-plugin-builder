/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.DocumentType;
import com.cloderia.helion.client.shared.service.DocumentTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class DocumentTypeServiceImpl extends BaseEntityServiceImpl<DocumentType> implements
		DocumentTypeService {

	/**
	 * 
	 */
	public DocumentTypeServiceImpl() {
		super(DocumentType.class);
	}
}
