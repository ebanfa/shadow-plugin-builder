/**
 * 
 */
package com.cloderia.ide;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import com.cloderia.ide.app.Application;
import com.cloderia.ide.app.Entity;
import com.cloderia.ide.app.Field;
import com.cloderia.ide.app.Module;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;
import freemarker.template.Version;

/**
 * @author adrian
 *
 */
public class ErraiAppBuilder extends ApplicationBuilder {

	private static final String CLIENT_DIR = "/com/cloderia/helion/client/";
	private static final String UI_DIR = CLIENT_DIR + "local/ui/";
	private static final String SHARED_DIR = CLIENT_DIR + "shared/";
	private static final String MODEL_DIR = SHARED_DIR + "model/";
	private static final String SERVER_DIR = "/com/cloderia/helion/server/";
	private String config;
	private Application application;
	private Configuration configuration;

	/**
	 * 
	 */
	public ErraiAppBuilder() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param config
	 */
	public ErraiAppBuilder(String config) {
		super();
		this.config = config;
	}

	

	/**
	 * @return the config
	 */
	public String getConfig() {
		return config;
	}

	/**
	 * @param config
	 *            the config to set
	 */
	public void setConfig(String config) {
		this.config = config;
	}

	/**
	 * @return the application
	 */
	public Application getApplication() {
		return application;
	}

	/**
	 * @param application
	 *            the application to set
	 */
	public void setApplication(Application application) {
		this.application = application;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.cloderia.ide.ApplicationBuilder#loadAplicationDefinition()
	 */
	@Override
	public Application loadAplicationDefinition() {
		try {

			File file = new File(this.config);
			JAXBContext jaxbContext = JAXBContext
					.newInstance(Application.class);
			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			application = (Application) jaxbUnmarshaller.unmarshal(file);
			configuration = configure(application);
			return application;
		} catch (JAXBException e) {
			e.printStackTrace();
		}
		return super.loadAplicationDefinition();
	}
	
	private Configuration configure(Application application) {
		/* Create and adjust the configuration */
		Configuration configuration = new Configuration();
		try {
			configuration
					.setDirectoryForTemplateLoading(
							new File(application.getTemplatesDir()));
		} catch (IOException e) {
			e.printStackTrace();
		}
		configuration.setObjectWrapper(new DefaultObjectWrapper());
		configuration.setDefaultEncoding("UTF-8");
		configuration
				.setTemplateExceptionHandler(TemplateExceptionHandler.HTML_DEBUG_HANDLER);
		configuration.setIncompatibleImprovements(new Version(2, 3, 20));
		return configuration;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.cloderia.ide.ApplicationBuilder#buildApplication(com.cloderia.ide
	 * .app.Application)
	 */
	@Override
	public Application buildApplication(Application application) {

		System.out.println(application.getModules());
		this.deleteDir(application.getGenerateSourcesDir());
		this.createDirectoryIfNeeded(application.getGenerateSourcesDir());
		this.buildModules(application);
		return application;
	}

	/**
	 * @param application
	 */
	public void buildModules(Application application) {
		for (Module module : application.getModules()) {
			System.out.println(module);
			processFields(module);
			processRelatedChildEntities(module);
			//doHTMLFiles(module);
			//doComponents(module);
			doEndPoints(module);
			doServices(module);
			doEntities(module);
		}
	}

	private void processFields(Module module) {
		List<Entity> entitiesInModule = module.getEntities();
		// Loop through all the entities in the module
		for(Entity entity : module.getEntities()){
			List<Field> fieldsInEntity = entity.getFields();
			// Process the fields in the entity
			for(Field field : fieldsInEntity){
				// Only process relationship fields
				String javaName = "";
				String fieldName = field.getName();
				if(fieldName.contains("_")){
					String[] nameParts = fieldName.split("_");
					for (int i = 0; i < nameParts.length; i++) {
						String part = nameParts[i];
						if(i != 0) {
							part = part.substring(0, 1).toUpperCase() + part.substring(1);
						}
						javaName = javaName.concat(part);
					}
				}
				else {
					javaName = fieldName;
				}
				field.setJavaName(javaName);
			}
		}
		module.setEntities(entitiesInModule);
	}
	
	private void processRelatedChildEntities(Module module) {
		List<Entity> entitiesInModule = module.getEntities();
		List<Entity> cloneOfEntitiesInModule = new ArrayList(entitiesInModule);
		// Loop through all the entities in the module
		for(Entity entity : module.getEntities()){
			List<Field> fieldsInEntity = entity.getFields();
			// Process the fields in the entity
			for(Field field : fieldsInEntity){
				// Only process relationship fields
				if(field.getRelationshipField().equals("Y")){
					String targetEntityPostName = field.getDataType();
					
					for(Entity item: cloneOfEntitiesInModule){
						if(item.getPostName().equals(targetEntityPostName)) {
							String fieldName = field.getName(); //+ UUID.randomUUID().toString();
							//item.getRelatedChildFields().put(fieldName, field);
							item.getRelatedChildEntities().put(fieldName, entity);
						}

					}
				}

			}
		}
		module.setEntities(cloneOfEntitiesInModule);
	}

	private void doHTMLFiles(Module module) {
		// Create directory structure
		String moduleDir = application.getGenerateSourcesDir() + module.getName();
		String htmlFilesDirs = moduleDir + ErraiAppBuilder.UI_DIR + module.getName();
		this.createDirectoryIfNeeded(moduleDir);
		this.createDirectoryIfNeeded(htmlFilesDirs);
		for(Entity entity: module.getEntities()) {
			String entityDir = htmlFilesDirs + "/" + entity.getName().toLowerCase();
			this.createDirectoryIfNeeded(entityDir);
			// Generate the create HTML pages
			this.generateArtifact(module, entity, "html/errai/create-entity.ftl" , 
					entityDir + "/create-" + entity.getName().toLowerCase() + ".html");
			// Generate the edit HTML pages
			this.generateArtifact(module, entity, "html/errai/edit-entity.ftl" , 
					entityDir + "/edit-" + entity.getName().toLowerCase() + ".html");
			// Generate the list HTML pages
			this.generateArtifact(module, entity, "html/errai/list-entity.ftl" , 
					entityDir + "/list-" + entity.getName().toLowerCase() + ".html");
			// Generate the view HTML pages
			this.generateArtifact(module, entity, "html/errai/view-entity.ftl" , 
					entityDir + "/view-" + entity.getName().toLowerCase() + ".html");
			// Generate the list item HTML pages
			this.generateArtifact(module, entity, "html/errai/entity-list-item.ftl" , 
					entityDir + "/" + entity.getName().toLowerCase() + "-list-item.html");
		}
	}

	private void doComponents(Module module) {
		// Create directory structure
		String moduleDir = application.getGenerateSourcesDir() + module.getName();
		String htmlFilesDirs = moduleDir + ErraiAppBuilder.UI_DIR + module.getName();
		this.createDirectoryIfNeeded(moduleDir);
		this.createDirectoryIfNeeded(htmlFilesDirs);
		for(Entity entity: module.getEntities()) {
			String entityDir = htmlFilesDirs + "/" + entity.getName().toLowerCase();
			this.createDirectoryIfNeeded(entityDir);
			// Generate the create java file
			this.generateArtifact(module, entity, "components/errai/create-entity.ftl" , 
					entityDir + "/Create" + entity.getName() + "Page.java");
			// Generate the edit  java file
			this.generateArtifact(module, entity, "components/errai/edit-entity.ftl" , 
					entityDir + "/Edit" + entity.getName() + "Page.java");
			// Generate the list  java file
			this.generateArtifact(module, entity, "components/errai/list-entity.ftl" , 
					entityDir + "/List" + entity.getName() + "Page.java");
			// Generate the view  java file
			this.generateArtifact(module, entity, "components/errai/view-entity.ftl" , 
					entityDir + "/View" + entity.getName() + "Page.java");
			// Generate the list item  java file
			this.generateArtifact(module, entity, "components/errai/entity-list-item.ftl" , 
					entityDir + "/" + entity.getName() + "ListItemWidget.java");
		}
	}

	private void doEndPoints(Module module) {
		// Create directory structure
		String moduleDir = application.getGenerateSourcesDir() + module.getName();
		String endpointFilesDirs = moduleDir + ErraiAppBuilder.SHARED_DIR;
		String endpointImplFilesDirs = moduleDir + ErraiAppBuilder.SERVER_DIR;
		this.createDirectoryIfNeeded(moduleDir);
		this.createDirectoryIfNeeded(endpointFilesDirs);
		this.createDirectoryIfNeeded(endpointImplFilesDirs);
		this.createDirectoryIfNeeded(endpointFilesDirs + "endpoint");
		this.createDirectoryIfNeeded(endpointImplFilesDirs + "endpoint");
		for(Entity entity: module.getEntities()) {
			// Generate the create java file
			this.generateArtifact(module, entity, "endpoints/errai/interface.ftl" , 
					endpointFilesDirs + "/endpoint/" + entity.getName() + "EndPoint.java");
			// Generate the edit  java file
			this.generateArtifact(module, entity, "endpoints/errai/implementation.ftl" , 
					endpointImplFilesDirs + "/endpoint/" + entity.getName() + "EndPointImpl.java");
			
		}
	}

	private void doServices(Module module) {
		// Create directory structure
		String moduleDir = application.getGenerateSourcesDir() + module.getName();
		String serviceFilesDirs = moduleDir + ErraiAppBuilder.SHARED_DIR;
		String serviceImplFilesDirs = moduleDir + ErraiAppBuilder.SERVER_DIR;
		this.createDirectoryIfNeeded(moduleDir);
		this.createDirectoryIfNeeded(serviceFilesDirs);
		this.createDirectoryIfNeeded(serviceImplFilesDirs);
		this.createDirectoryIfNeeded(serviceFilesDirs + "service");
		this.createDirectoryIfNeeded(serviceImplFilesDirs + "service");
		for(Entity entity: module.getEntities()) {
			// Generate the create java file
			this.generateArtifact(module, entity, "services/errai/interface.ftl" , 
					serviceFilesDirs + "/service/" + entity.getName() + "Service.java");
			// Generate the edit  java file
			this.generateArtifact(module, entity, "services/errai/implementation.ftl" , 
					serviceImplFilesDirs + "/service/" + entity.getName() + "ServiceImpl.java");
		}
	}
	
	private void doEntities(Module module) {
		// Create directory structure
		String moduleDir = application.getGenerateSourcesDir() + module.getName();
		String modelDirs = moduleDir + ErraiAppBuilder.MODEL_DIR;
		this.createDirectoryIfNeeded(modelDirs);
		for(Entity entity: module.getEntities()) {
			// Generate the create java file
			this.generateArtifact(module, entity, "entities/errai/entity.ftl" , 
					modelDirs + entity.getName() + ".java");
		}
	}
	
	private void generateArtifact(Module module, Entity entity, String tmplFile,
			String outFile) {
		try {
			Template template = configuration.getTemplate(tmplFile);
			FileOutputStream fos = new FileOutputStream(outFile);
			Writer out = new OutputStreamWriter(fos);
			Map<String, Object> root = new HashMap<String, Object>();
			root.put("module", module);
			root.put("entity", entity);
			root.put("application", application);
			template.process(root, out);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (TemplateException e) {
			e.printStackTrace();
		}
	}

}
