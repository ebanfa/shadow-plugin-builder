/**
 * 
 */
package com.cloderia.ide;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import com.cloderia.ide.app.Application;
import com.cloderia.ide.app.Entity;
import com.cloderia.ide.app.Field;
import com.cloderia.ide.app.Page;
import com.cloderia.ide.app.Module;
import com.cloderia.ide.app.MenuBar;
import com.cloderia.ide.app.Menu;
import com.cloderia.ide.app.MenuGroup;

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
public class WordpressPluginBuilder extends ApplicationBuilder {

	private String config;
	private String appName;
	private String targetDir;
	private String pluginDir;
	private String pluginName;
	private String templatesDir;

	private Application application;
	private Configuration configuration;

	private static final String TEMPLATES_DIR = "templates/";
	private static final String API_DIR = "includes/api/";
	private static final String CPT_DIR = "includes/abstracts/";

	/**
	 * 
	 */
	public WordpressPluginBuilder() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param config
	 */
	public WordpressPluginBuilder(String pluginName, String baseDir) {
		super();
		System.out.println("Start Wordpress Plugin Builder v1.0.0");
		this.pluginName = pluginName;
		this.targetDir = baseDir + "target/";
		this.pluginDir = this.targetDir + this.pluginName + "/";
		this.appName = pluginName.substring(0, 1).toUpperCase() + pluginName.substring(1);
		this.templatesDir = baseDir + "templates/";
		this.config = baseDir + "config/application.xml";
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
		this.buildModules(application);
		return application;
	}

	/**
	 * @param application
	 */
	public void buildModules(Application application) {
		for (Module module : application.getModules()) {
			//System.out.println(module);
			processRelatedChildEntities(module);
			doComponents(module);
			doEnities(module);
			doServices(module);
			doEntityHTML(module);
			doPages(module);
			doMenuHTML(application);
			doJSFiles(module);
		}
		
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
					//System.out.println("Found a relationship field: " + field.getName() + " of type: " + field.getDataType());
					String targetEntityPostName = field.getDataType();
					for(Entity item: cloneOfEntitiesInModule){
						if(item.getPostName().equals(targetEntityPostName)) {
							String fieldName = field.getName() + UUID.randomUUID().toString();
							//System.out.println("Adding child: " + entity.getName() + " to parent: " + item.getName());
							if(item.getName().equals("Property")) {
								System.out.println("Adding child: " + entity.getName() + " of field " + fieldName + " to parent: " + item.getName());
							}
							item.getRelatedChildEntities().put(fieldName, entity);
						}

					}
				}

			}
		}
		module.setEntities(cloneOfEntitiesInModule);
	}

	private void doMenuHTML(Application application) {
		MenuBar menuBar = application.getMenuBar();

		for(MenuGroup group: menuBar.getMenuGroups()) {
			//System.out.println("Processing group:" + group.getName() );
			if(group.getType().equals("menu")){
				if(group.getTargetType().equals("page")){
					String groupName = group.getName();
					String targetTemplate = group.getTargetTemplate();
					if(targetTemplate != null) {
						this.generateMenuArtifact(group, null, targetTemplate , this.pluginDir + "templates/page/" + groupName + ".php");
					}
				}
			}
			else {
				for(Menu menu: group.getMenus()){
					if(menu.getTargetType().equals("page")){
						String menuName = menu.getName();
						//System.out.println("Processing group:" + menu.getName() );
						String targetTemplate = menu.getTargetTemplate();
						if(targetTemplate != null) {
							this.generateMenuArtifact(group, menu, targetTemplate , this.pluginDir + "templates/page/" + menuName + ".php");
						}
						
					}
				}
			}
		}
	}

	private void doComponents(Module module) {
		this.generateArtifact(module, null, 
			"components/wordpress/index-php.ftl" , this.pluginDir + "index.php");

		this.generateArtifact(module, null, 
			"components/wordpress/plugin-php.ftl" , this.pluginDir + this.application.getName() + ".php");

		this.generateArtifact(module, null, 
			"components/wordpress/readme-md.ftl" , this.pluginDir + "README.md");
	}


	private void doPages(Module module) {
		String outputDir = this.pluginDir + "templates/";
		String pageOutputDir = outputDir + "page/";
		String jsOutputDir = this.pluginDir + "js/";
		String includeApiOutputDir = this.pluginDir + "includes/api/";

		for(Page page: module.getPages()) {

			String pageName = page.getName();
			String jsTemplate = page.getJsTemplate();
			String apiTemplate = page.getApiTemplate();
			String pageTemplate = page.getPageTemplate();

			if(jsTemplate != null) {
				this.generatePageArtifact(module, page, jsTemplate , jsOutputDir + pageName + ".js");
			}
			if(apiTemplate != null) {
				this.generatePageArtifact(module, page, apiTemplate , includeApiOutputDir + pageName + "API.php");
			}
			if(pageTemplate != null) {
				this.generatePageArtifact(module, page, pageTemplate , pageOutputDir + pageName + ".php");
			}
		}
	}

	private void doEnities(Module module) {
		for(Entity entity: module.getEntities()) {
			this.generateArtifact(module, entity, 
				"entities/wordpress/entity.ftl" , this.pluginDir + "includes/abstracts/" + entity.getName() + "CPT.php");
		}
	}

	private void doServices(Module module) {
		String includeApiOutputDir = this.pluginDir + "includes/api/";
		String includeUtilOutputDir = this.pluginDir + "includes/utils/";

		for(Entity entity: module.getEntities()) {
			//System.out.println("Processing entity service: " + entity.getName());
			String entityName = entity.getName();
			if(entity.getApiTemplate() != null){
				this.generateArtifact(module, entity, entity.getApiTemplate() , includeApiOutputDir + entityName + "API.php");
			} 
			else {
				this.generateArtifact(module, entity, 
					"services/wordpress/entity-service-api.ftl" , includeApiOutputDir + entityName + "API.php");
			}
			this.generateArtifact(module, entity, 
				"services/wordpress/custom-fields-php.ftl" , includeUtilOutputDir + "CloderiaCustomFieldsUtils.php");
			this.generateArtifact(module, entity, 
				"services/wordpress/custom-post-php.ftl" , includeUtilOutputDir + "CloderiaCustomPostTypesUtils.php");
			this.generateArtifact(module, entity, 
				"services/wordpress/menu-utils-php.ftl" , includeUtilOutputDir + "CloderiaMenuUtils.php");
			this.generateArtifact(module, entity, 
				"services/wordpress/template-functions-php.ftl" , includeUtilOutputDir + "CloderiaTemplateFunctions.php");

			this.generateArtifact(module, entity, 
				"services/wordpress/ui-display-php.ftl" , includeApiOutputDir + "CloderiaUIDisplayAPI.php");
		}
		this.generateArtifact(module, null, 
			"services/wordpress/page-controller-php.ftl" , includeApiOutputDir + "PageControllerAPI.php");
	}

	private void doEntityHTML(Module module) {
		String outputDir = this.pluginDir + "templates/";
		String entityOutputDir = outputDir + "entity/";

		this.generateArtifact(module, null, "html/wordpress/wrapper-end-php.ftl" , outputDir + "wrapper-end.php");
		this.generateArtifact(module, null, "html/wordpress/wrapper-start-php.ftl" , outputDir + "wrapper-start.php");

		for(Entity entity: module.getEntities()) {

			String entityName = entity.getName();
			String createPageTemplate = entity.getCreatePageTemplate();
			String editPageTemplate = entity.getEditPageTemplate();
			String viewPageTemplate = entity.getViewPageTemplate();
			String listPageTemplate = entity.getListPageTemplate();
			String entityPageOutputDir = entityOutputDir + entityName.toLowerCase() + "/";

			String createPageName = entityPageOutputDir + entityName.toLowerCase() + "-create-form.php";
			String editPageName = entityPageOutputDir + entityName.toLowerCase() + "-edit-form.php";
			String viewPageName = entityPageOutputDir + "single-" +  entityName.toLowerCase() + ".php";
			String listPageName = entityPageOutputDir + entityName.toLowerCase() + "-archive.php";


			this.createDirectoryIfNeeded(entityPageOutputDir);
			// Create page
			if(createPageTemplate != null) {
				this.generateArtifact(module, entity, createPageTemplate, createPageName);
			}
			else {
				this.generateArtifact(module, entity, "html/wordpress/entity/entity-create-form.ftl" , createPageName);
			}
			// Edit page
			if(editPageTemplate != null) {
				this.generateArtifact(module, entity, editPageTemplate, editPageName);
			}
			else {
				this.generateArtifact(module, entity, "html/wordpress/entity/entity-edit-form.ftl" , editPageName);
			}
			// View page
			if(viewPageTemplate != null) {
				this.generateArtifact(module, entity, viewPageTemplate, viewPageName);
			}
			else {
				this.generateArtifact(module, entity, "html/wordpress/entity/entity-single.ftl" , viewPageName);
			}
			// List Page
			if(listPageTemplate != null) {
				this.generateArtifact(module, entity, listPageTemplate, listPageName);
			}
			else {
				this.generateArtifact(module, entity, "html/wordpress/entity/entity-list.ftl" , listPageName);
			}

		}
		
		//this.generateArtifact(module, null, "html/wordpress/entity/entity-page.ftl" , entityOutputDir + "entity-page.php");

		this.generateArtifact(module, null, "html/wordpress/entity/entity-form-end.ftl" , entityOutputDir + "entity-form-end.php");
		this.generateArtifact(module, null, "html/wordpress/entity/entity-form-start.ftl" , entityOutputDir + "entity-form-start.php");
		this.generateArtifact(module, null, "html/wordpress/entity/entity-list-end.ftl" , entityOutputDir + "entity-list-end.php");
		this.generateArtifact(module, null, "html/wordpress/entity/entity-list-start.ftl" , entityOutputDir + "entity-list-start.php");
		this.generateArtifact(module, null, "html/wordpress/entity/entity-single-end.ftl" , entityOutputDir + "entity-single-end.php");
		this.generateArtifact(module, null, "html/wordpress/entity/entity-single-start.ftl" , entityOutputDir + "entity-single-start.php");
		this.generateArtifact(module, null, "html/wordpress/entity/field-wrapper-end.ftl" , entityOutputDir + "field-wrapper-end.php");
		this.generateArtifact(module, null, "html/wordpress/entity/field-wrapper-start.ftl" , entityOutputDir + "field-wrapper-start.php");
		this.generateArtifact(module, null, "html/wordpress/entity/form-wrapper-end.ftl" , entityOutputDir + "form-wrapper-end.php");
		this.generateArtifact(module, null, "html/wordpress/entity/form-wrapper-start.ftl" , entityOutputDir + "form-wrapper-start.php");
		// Menu Bar
		this.generateArtifact(module, null, "html/wordpress/menu-php.ftl" , outputDir + "app-menu.php");
		this.generateArtifact(module, null, "html/wordpress/menu-start-php.ftl" , outputDir + "app-menu-start.php");
		this.generateArtifact(module, null, "html/wordpress/menu-end-php.ftl" , outputDir + "app-menu-end.php");
	}

	private void doJSFiles(Module module) {
		
		this.generateArtifact(module, null, 
			"js/wordpress/entity-datatables-js.ftl" , this.pluginDir + "js/entity-datatables.js");

		for(Entity entity : module.getEntities()){
			if(entity.getJsPageTemplate() != null){
				this.generateArtifact(module, entity, entity.getJsPageTemplate() , this.pluginDir + "js/" + entity.getName().toLowerCase() + "-form.js");
			} 
		}
		this.generateArtifact(module, null, 
			"js/wordpress/entity-form-js.ftl" , this.pluginDir + "js/entity-form.js");
	}
	
	private void generateArtifact(Module module, Entity entity, String tmplFile,
			String outFile) {
		try {
                        //System.out.println("Generating artifact for entity" + " using template file:" + tmplFile);
			Template template = configuration.getTemplate(tmplFile);
			FileOutputStream fos = new FileOutputStream(outFile);
			Writer out = new OutputStreamWriter(fos);
			Map<String, Object> root = new HashMap<String, Object>();
			root.put("pluginName", this.pluginName);
			root.put("module", module);
			root.put("entity", entity);
			root.put("application", application);
			root.put("menuBar", application.getMenuBar());
			template.process(root, out);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (TemplateException e) {
			e.printStackTrace();
		}
	}

	private void generatePageArtifact(Module module, Page page, String tmplFile,
			String outFile) {
		try {
			Template template = configuration.getTemplate(tmplFile);
			FileOutputStream fos = new FileOutputStream(outFile);
			Writer out = new OutputStreamWriter(fos);
			Map<String, Object> root = new HashMap<String, Object>();
			root.put("pluginName", this.pluginName);
			root.put("module", module);
			root.put("page", page);
			root.put("application", application);
			root.put("menuBar", application.getMenuBar());
			template.process(root, out);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (TemplateException e) {
			e.printStackTrace();
		}
	}
	
	private void generateMenuArtifact(MenuGroup group, Menu menu, String tmplFile,
			String outFile) {
		try {
			Template template = configuration.getTemplate(tmplFile);
			FileOutputStream fos = new FileOutputStream(outFile);
			Writer out = new OutputStreamWriter(fos);
			Map<String, Object> root = new HashMap<String, Object>();
			root.put("pluginName", this.pluginName);
			root.put("group", group);
			root.put("menu", menu);
			root.put("application", application);
			root.put("menuBar", application.getMenuBar());
			template.process(root, out);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (TemplateException e) {
			e.printStackTrace();
		}
	}

}
