/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.SubjectArea;
import com.cloderia.helion.client.shared.endpoint.SubjectAreaEndPoint;
import com.cloderia.helion.client.shared.service.SubjectAreaService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class SubjectAreaEndPointImpl extends
		BaseEntityEndPointImpl<SubjectArea, SubjectAreaService> implements SubjectAreaEndPoint {
}
