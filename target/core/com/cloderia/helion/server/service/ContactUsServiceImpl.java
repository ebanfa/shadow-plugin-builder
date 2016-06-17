/**
 * 
 */
package com.cloderia.helion.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.helion.client.shared.model.ContactUs;
import com.cloderia.helion.client.shared.service.ContactUsService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class ContactUsServiceImpl extends BaseEntityServiceImpl<ContactUs> implements
		ContactUsService {

	/**
	 * 
	 */
	public ContactUsServiceImpl() {
		super(ContactUs.class);
	}
}
