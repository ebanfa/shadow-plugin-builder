/**
 * 
 */
package com.cloderia.ide;

/**
 * @author adrian
 *
 */
public class Main {

	/**
	 * 
	 */
	public Main() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		if(args.length > 2 ){  
			String baseDir = args[0];
			String pluginName = args[1];
			String configFile = args[2]; 

			Builder builder = new WordpressPluginBuilder(pluginName, baseDir, configFile);
			//Builder builder = new WordpressPluginBuilder("/home/adrian/Projects/shadow-plugin-builder/config/essaysite-application.xml");

			//Builder builder = new WordpressPluginBuilder(
			//	"/home/adrian/Projects/shadow-plugin-builder/config/application.xml", 
			//	"/home/adrian/Projects/shadow-plugin-builder/target/" );
			builder.build();
		}  

	}

}
