/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.Person;
import com.cloderia.helion.client.shared.service.PersonService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class PersonServiceImpl extends BaseEntityServiceImpl<Person> implements
		PersonService {

	/**
	 * 
	 */
	public PersonServiceImpl() {
		super(Person.class);
	}
}
