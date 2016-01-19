/**
 * 
 */
package com.cloderia.${application.packageName}.server.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import com.cloderia.${application.packageName}.client.shared.model.${entity.name};
import com.cloderia.${application.packageName}.client.shared.service.${entity.name}Service;

/**
 * @author Edward Banfa
 *
 */
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class ${entity.name}ServiceImpl extends BaseEntityServiceImpl<${entity.name}> implements
		${entity.name}Service {

	/**
	 * 
	 */
	public ${entity.name}ServiceImpl() {
		super(${entity.name}.class);
	}
}
