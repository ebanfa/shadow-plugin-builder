/**
 * 
 */
package com.cloderia.ide;

import com.cloderia.ide.app.Application;

/**
 * @author adrian
 *
 */
public interface Builder {
	
	public void build();
	
	public Application loadAplicationDefinition();
	
	public Application processApplicationDefinition(Application application);
	
	public Application buildApplication(Application application);

}
