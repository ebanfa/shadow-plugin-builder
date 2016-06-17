/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.AcademicLevel;
import com.cloderia.helion.client.shared.endpoint.AcademicLevelEndPoint;
import com.cloderia.helion.client.shared.service.AcademicLevelService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class AcademicLevelEndPointImpl extends
		BaseEntityEndPointImpl<AcademicLevel, AcademicLevelService> implements AcademicLevelEndPoint {
}
