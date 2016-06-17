/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.NoOfPages;
import com.cloderia.helion.client.shared.endpoint.NoOfPagesEndPoint;
import com.cloderia.helion.client.shared.service.NoOfPagesService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class NoOfPagesEndPointImpl extends
		BaseEntityEndPointImpl<NoOfPages, NoOfPagesService> implements NoOfPagesEndPoint {
}
