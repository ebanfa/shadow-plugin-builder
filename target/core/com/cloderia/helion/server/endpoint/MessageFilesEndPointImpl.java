/**
 * 
 */
package com.cloderia.helion.server.endpoint;

import javax.ejb.Stateless;

import com.cloderia.helion.client.shared.model.MessageFiles;
import com.cloderia.helion.client.shared.endpoint.MessageFilesEndPoint;
import com.cloderia.helion.client.shared.service.MessageFilesService;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class MessageFilesEndPointImpl extends
		BaseEntityEndPointImpl<MessageFiles, MessageFilesService> implements MessageFilesEndPoint {
}
