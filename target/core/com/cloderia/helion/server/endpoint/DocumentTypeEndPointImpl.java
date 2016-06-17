/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.DocumentType;
import com.cloderia.helion.client.shared.endpoint.DocumentTypeEndPoint;
import com.cloderia.helion.client.shared.service.DocumentTypeService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class DocumentTypeEndPointImpl extends
		BaseEntityEndPointImpl<DocumentType, DocumentTypeService> implements DocumentTypeEndPoint {
}
