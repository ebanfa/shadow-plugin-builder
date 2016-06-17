/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.WritingStyle;
import com.cloderia.helion.client.shared.endpoint.WritingStyleEndPoint;
import com.cloderia.helion.client.shared.service.WritingStyleService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class WritingStyleEndPointImpl extends
		BaseEntityEndPointImpl<WritingStyle, WritingStyleService> implements WritingStyleEndPoint {
}
