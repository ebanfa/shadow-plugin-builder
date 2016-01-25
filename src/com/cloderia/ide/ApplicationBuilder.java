/**
 * 
 */
package com.cloderia.ide;

import java.io.File;

import com.cloderia.ide.app.Application;

/**
 * @author adrian
 *
 */
public abstract class ApplicationBuilder implements Builder {

	/**
	 * 
	 */
	public ApplicationBuilder() {
		// TODO Auto-generated constructor stub
	}

	/* (non-Javadoc)
	 * @see com.cloderia.ide.Builder#build()
	 */
	@Override
	public void build() {
		Application application = loadAplicationDefinition();
		application = processApplicationDefinition(application);
		buildApplication(application);
	}

	/* (non-Javadoc)
	 * @see com.cloderia.ide.Builder#loadAplicationDefinition()
	 */
	@Override
	public Application loadAplicationDefinition() {
		return new Application();
	}

	/* (non-Javadoc)
	 * @see com.cloderia.ide.Builder#processApplicationDefinition(com.cloderia.ide.app.Application)
	 */
	@Override
	public Application processApplicationDefinition(Application application) {
		return application;
	}

	/* (non-Javadoc)
	 * @see com.cloderia.ide.Builder#buildApplication(com.cloderia.ide.app.Application)
	 */
	@Override
	public Application buildApplication(Application application) {
		return application;
	}
	
	/**
	 * @param directoryName
	 */
	protected File createDirectoryIfNeeded(String directoryName) {
		File theDir = new File(directoryName);
		// if the directory does not exist, create it
		if (!theDir.exists()) {
			try {
				if (theDir.mkdirs()){
					//System.out.println("Created directory:" + directoryName);
				}
				else{
					//System.out.println("Could not create directory:" + directoryName);
				}
					
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			//System.out.println(String.format("The directory %s already exits", directoryName));
		}
		return theDir;
	}
	
	protected boolean deleteDir(String directoryName) {
		File theDir = new File(directoryName);
		if (theDir.exists()) {
	        File[] files = theDir.listFiles();
	        for (int i = 0; i < files.length; i++) {
	            if (files[i].isDirectory()) {
	            	deleteDir(files[i].getPath());
	            } else {
	                files[i].delete();
	            }
	        }
	    }
	    return (theDir.delete());
	}

}
