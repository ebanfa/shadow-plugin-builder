/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.Person;
import com.cloderia.helion.client.shared.endpoint.PersonEndPoint;
import com.cloderia.helion.client.shared.service.PersonService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class PersonEndPointImpl extends
		BaseEntityEndPointImpl<Person, PersonService> implements PersonEndPoint {
}
