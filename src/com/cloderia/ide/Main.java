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

		if(args.length > 1 ){  
			String baseDir = args[0];
			String pluginName = args[1]; 

			Builder builder = new WordpressPluginBuilder(pluginName, baseDir);

			//Builder builder = new WordpressPluginBuilder(
			//	"/home/adrian/Projects/shadow-plugin-builder/config/application.xml", 
			//	"/home/adrian/Projects/shadow-plugin-builder/target/" );
			builder.build();
		}  

	}

}
