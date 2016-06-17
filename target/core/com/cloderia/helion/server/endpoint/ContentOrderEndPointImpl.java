/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.ContentOrder;
import com.cloderia.helion.client.shared.endpoint.ContentOrderEndPoint;
import com.cloderia.helion.client.shared.service.ContentOrderService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ContentOrderEndPointImpl extends
		BaseEntityEndPointImpl<ContentOrder, ContentOrderService> implements ContentOrderEndPoint {
}
