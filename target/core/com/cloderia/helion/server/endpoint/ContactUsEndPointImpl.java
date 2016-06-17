/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.ContactUs;
import com.cloderia.helion.client.shared.endpoint.ContactUsEndPoint;
import com.cloderia.helion.client.shared.service.ContactUsService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ContactUsEndPointImpl extends
		BaseEntityEndPointImpl<ContactUs, ContactUsService> implements ContactUsEndPoint {
}
