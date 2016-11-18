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
import com.cloderia.ide.app.Api;
import com.cloderia.ide.app.Field;
import com.cloderia.ide.app.Page;
import com.cloderia.ide.app.Module;
import com.cloderia.ide.app.MenuBar;
import com.cloderia.ide.app.Menu;
import com.cloderia.ide.app.MenuGroup;
import com.cloderia.ide.app.UIComponent;

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

	private static final String API_DIR = "includes/api/";
	private static final String TEMPLATES_DIR = "templates/";
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
	public WordpressPluginBuilder(String pluginName, String baseDir, String configFile) {
		super();
		System.out.println("Start Wordpress Plugin Builder v1.0.0 for app " + pluginName);
		this.pluginName = pluginName;
		this.targetDir = baseDir + "target/";
		this.pluginDir = this.targetDir + this.pluginName + "/";
		this.appName = pluginName.substring(0, 1).toUpperCase() + pluginName.substring(1);
		this.templatesDir = baseDir + "templates/" + this.pluginName + "/";
		System.out.println("Using templates dir: " + this.templatesDir);
		this.config = baseDir + configFile;
		//this.config = baseDir + "config/wpcommerce-application.xml";
		//this.config = baseDir + "config/wp-cargo-master.xml";
		//this.config = baseDir + "config/business-site-application.xml";
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
			processFields(module) ;
			processRelatedChildEntities(module);
			processVirtualEntities(module) ;
			doComponents(module);
			doSQL(module);
			doEnities(module);
			doAPI(module);
			doModuleAPI(module);
			doUtilities(module);
			doRequestProcessors(module);
			doViews(module);
			doEntityHTML(module);
			doEntityJSFiles(module);
			doPages(module);
			doUIComponents(module);
			doMenuHTML(application);
		}
		
	}

	private void processFields(Module module) {
		for(Entity entity : module.getEntities()){
			List<Field> fieldsInEntity = entity.getFields();
			// Process the fields in the entity
			for(Field field : fieldsInEntity){
				// Set the nick name to the field name if
				// field does not have a nick name
				if(field.getNickName() == null){
					field.setNickName(field.getName());
				}

			}
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
					String targetEntityPostName = field.getDataType();
					
					for(Entity item: cloneOfEntitiesInModule){
						if(item.getPostName().equals(targetEntityPostName)) {
							String fieldName = field.getName(); //+ UUID.randomUUID().toString();
							item.getRelatedChildEntities().put(fieldName, entity);
						}

					}
				}

			}
		}
		module.setEntities(cloneOfEntitiesInModule);
	}
	
	

	private void processVirtualEntities(Module module) {
		List<Entity> entitiesInModule = module.getEntities();
		List<Entity> cloneOfEntitiesInModule = new ArrayList(entitiesInModule);
		// Loop through all the entities in the module
		for(Entity entity : module.getEntities()) {

			if (entity.getIsVirtual() != null) {
				String parentName = entity.getParentName();
				if(parentName != null) {

					List<Field> fieldsInEntity = entity.getFields();

					for(Entity item: cloneOfEntitiesInModule){
						if(item.getName().equals(parentName)) {
							List<Field> parentFields = item.getFields();
							List<Field> childFields = entity.getFields();
							entity.getVirtualFields().addAll(childFields);

							for(Field parentField: parentFields) {
								boolean fieldExists = false;
								for(Field childField: childFields) {
									if(childField.getName().equals(parentField.getName())) {
										fieldExists = true;
									}

								}
								if(!fieldExists){
									entity.getVirtualFields().add(parentField);
								}

							}
							//entity.getVirtualFields().addAll(parentFields);

						}

					}

				}

			}
		}
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
		this.generateArtifact(module, null, "components/wordpress/readme-md.ftl" , this.pluginDir + "README.md");
		this.generateArtifact(module, null, "components/wordpress/index-php.ftl" , this.pluginDir + "index.php");
		this.generateArtifact(module, null, "components/wordpress/plugin-php.ftl" , this.pluginDir + this.application.getName() + ".php");
		this.generateArtifact(module, null, "components/wordpress/plugin-includes-php.ftl" , this.pluginDir + "includes.php");
	}

	private void doUtilities(Module module) {
		this.generateArtifact(module, null, 
			"utils/wordpress/artifact-utils-php.ftl" , this.pluginDir +"includes/utils/" + "ArtifactUtils.php");
		this.generateArtifact(module, null, 
			"utils/wordpress/enqueue-utils-php.ftl" , this.pluginDir +"includes/utils/" + "EnqueueUtils.php");
		this.generateArtifact(module, null, 
			"utils/wordpress/ui-component-registry-php.ftl", this.pluginDir +"includes/utils/" + "UIComponentRegistry.php");
	}

	private void doEnities(Module module) {
		List<Entity> entitiesInModule = module.getEntities();
		for(Entity entity: entitiesInModule) {

			if (entity.getIsVirtual() != null) {		
				this.generateArtifact(module, entity, 
					"entities/wordpress/entity.ftl" , this.pluginDir + "includes/abstracts/" + entity.getName() + "CPT.php");this.generateArtifact(module, entity, 
					"entities/wordpress/model.ftl" , this.pluginDir + "includes/abstracts/" + entity.getName() + ".php");
			}
			else {
				entity.setIsVirtual("N");
				this.generateArtifact(module, entity, 
					"entities/wordpress/entity.ftl" , this.pluginDir + "includes/abstracts/" + entity.getName() + "CPT.php");this.generateArtifact(module, entity, 
					"entities/wordpress/model.ftl" , this.pluginDir + "includes/abstracts/" + entity.getName() + ".php");
			}
		}
	}

	private void doSQL(Module module) {
		this.generateArtifact(module, null, "entities/wordpress/db.ftl", this.pluginDir + "sql/db.sql");
		this.generateArtifact(module, null, "entities/wordpress/all_entities.ftl", this.pluginDir + "sql/all_entities.txt");
	}

	private void doAPI(Module module) {
		String includeApiOutputDir = this.pluginDir + "includes/api/";
		String includeUtilOutputDir = this.pluginDir + "includes/utils/";

		for(Entity entity: module.getEntities()) {
			String entityName = entity.getName();
			if(entity.getApiTemplate() != null){
				this.generateArtifact(module, entity, entity.getApiTemplate() , includeApiOutputDir + entityName + "API.php");
			} 
			
		}

		this.generateArtifact(module, null, "api/wordpress/admin-api-php.ftl", includeApiOutputDir +  "AdminAPI.php");
		//this.generateArtifact(module, null, "api/wordpress/entity-api-php.ftl", includeApiOutputDir +  "EntityAPI.php");
		//this.generateArtifact(module, null, "api/wordpress/ui-display-php.ftl", includeApiOutputDir + "UIDisplayAPI.php");
		//this.generateArtifact(module, null, "api/wordpress/entity-persistence-api.ftl", includeApiOutputDir +  "EntityPersistenceAPI.php");

		// Utility classes
		this.generateArtifact(module, null, 
			"utils/wordpress/custom-fields-php.ftl", includeUtilOutputDir + "CustomFieldsUtils.php");
		this.generateArtifact(module, null, 
			"utils/wordpress/custom-post-php.ftl", includeUtilOutputDir + "CustomPostTypesUtils.php");
		this.generateArtifact(module, null, 
			"utils/wordpress/menu-utils-php.ftl", includeUtilOutputDir + "MenuUtils.php");
		this.generateArtifact(module, null, 
			"utils/wordpress/template-functions-php.ftl", includeUtilOutputDir + "TemplateFunctions.php");
	}

	private void doModuleAPI(Module module) {
		for(Api api: module.getApis()) {
			this.generateArtifact(module, null, api.getApiTemplate() , this.pluginDir + api.getApiFileName());
		}
	}

	private void doRequestProcessors(Module module) {
		String includeControllerOutputDir = this.pluginDir + "includes/controller/";

		for(Page page: module.getPages()) {
			if(page.getAjaxRequestProcessorTemplate() != null)
				this.generatePageArtifact(module, page, 
					page.getAjaxRequestProcessorTemplate() , includeControllerOutputDir + page.getName() + "AjaxRequestProcessor.php");
			
		}

		for(Entity entity: module.getEntities()) {
			if(entity.getAjaxRequestProcessorTemplate() != null)
				this.generateArtifact(module, entity, 
					entity.getAjaxRequestProcessorTemplate() , includeControllerOutputDir + entity.getName() + "AjaxRequestProcessor.php");
		}
		/*this.generateArtifact(module, null, 
					"controllers/wordpress/request-processor-php.ftl" , includeControllerOutputDir +  "ArtifactRequestProcessor.php");
		this.generateArtifact(module, null, 
					"controllers/wordpress/ajax-request-processor-php.ftl" , includeControllerOutputDir +  "ArtifactAjaxRequestProcessor.php");*/
	}

	private void doViews(Module module) {
		String includeViewOutputDir = this.pluginDir + "includes/view/";

		for(Entity entity: module.getEntities()) {
			String entityName = entity.getName();
				String entityViewOutputDir = includeViewOutputDir + entityName.toLowerCase() + "/";
				this.createDirectoryIfNeeded(entityViewOutputDir);

			if(entity.getViewFilterTemplate() != null){
				this.generateArtifact(module, entity, entity.getViewFilterTemplate() , entityViewOutputDir + entityName + "ViewFilter.php");
			} 

			if(entity.getCreateViewTemplate() != null){
				this.generateArtifact(module, entity, entity.getCreateViewTemplate() , entityViewOutputDir + "Create" + entityName + "Page.php");
			} 

			if(entity.getCreateViewModelTemplate() != null){
				this.generateArtifact(module, entity, entity.getCreateViewModelTemplate() , entityViewOutputDir + "Create" + entityName + "PageModel.php");
			}  

			if(entity.getEditViewTemplate() != null){
				this.generateArtifact(module, entity, entity.getEditViewTemplate() , entityViewOutputDir + "Edit" + entityName + "Page.php");
			} 

			if(entity.getEditViewModelTemplate() != null){
				this.generateArtifact(module, entity, entity.getEditViewModelTemplate() , entityViewOutputDir + "Edit" + entityName + "PageModel.php");
			} 
			
			if(entity.getSingleViewTemplate() != null){
				this.generateArtifact(module, entity, entity.getSingleViewTemplate() , entityViewOutputDir + "View" + entityName + "Page.php");
			} 

			if(entity.getSingleViewModelTemplate() != null){
				this.generateArtifact(module, entity, entity.getSingleViewModelTemplate() , entityViewOutputDir + "View" + entityName + "PageModel.php");
			} 

			if(entity.getListViewTemplate() != null){
				this.generateArtifact(module, entity, entity.getListViewTemplate() , entityViewOutputDir + "List" + entityName + "Page.php");
			} 
			if(entity.getListViewModelTemplate() != null){
				this.generateArtifact(module, entity, entity.getListViewModelTemplate() , entityViewOutputDir + "List" + entityName + "PageModel.php");
			} 
		}
		
		//this.generateArtifact(module, null, "views/wordpress/list-entity-view.ftl" , includeViewOutputDir +  "ListEntityView.php");
	}

	private void doEntityHTML(Module module) {
		String outputDir = this.pluginDir + "templates/";
		String entityOutputDir = outputDir + "entity/";

		/*this.generateArtifact(module, null, "html/wordpress/wrapper-end-php.ftl" , outputDir + "wrapper-end.php");
		this.generateArtifact(module, null, "html/wordpress/wrapper-start-php.ftl" , outputDir + "wrapper-start.php");*/

		for(Entity entity: module.getEntities()) {

			String entityName = entity.getName();
			String createPageTemplate = entity.getCreatePageTemplate();
			String editPageTemplate = entity.getEditPageTemplate();
			String viewPageTemplate = entity.getViewPageTemplate();
			String listPageTemplate = entity.getListPageTemplate();
			String entityPageOutputDir = entityOutputDir + entityName.toLowerCase() + "/";

			String createPageName = entityPageOutputDir + "create-" +  entityName.toLowerCase() + "-page.php";
			String editPageName = entityPageOutputDir + "edit-" +  entityName.toLowerCase() + "-page.php";
			String viewPageName = entityPageOutputDir + "single-" +  entityName.toLowerCase() + "-page.php";
			String listPageName = entityPageOutputDir + entityName.toLowerCase() + "-archive.php";
			String modalListPageName = entityPageOutputDir + entityName.toLowerCase() + "-modal-archive.php";

			
			// Create page
			if(createPageTemplate != null) {
				this.createDirectoryIfNeeded(entityPageOutputDir);
				this.generateArtifact(module, entity, createPageTemplate, createPageName);
			}
			// Edit page
			if(editPageTemplate != null) {
				this.createDirectoryIfNeeded(entityPageOutputDir);
				this.generateArtifact(module, entity, editPageTemplate, editPageName);
			}
			// View page
			if(viewPageTemplate != null) {
				this.createDirectoryIfNeeded(entityPageOutputDir);
				this.generateArtifact(module, entity, viewPageTemplate, viewPageName);
			}
			// List Page
			if(listPageTemplate != null) {
				this.createDirectoryIfNeeded(entityPageOutputDir);
				this.generateArtifact(module, entity, listPageTemplate, listPageName);
			}
			//this.generateArtifact(module, entity, "html/wordpress/entity/entity-modal-list.ftl" , modalListPageName);

		}
		entityOutputDir = outputDir + "entity/";
		this.generateArtifact(module, null, "html/wordpress/entity/create-entity-page-php.ftl" , entityOutputDir + "create-entity-page.php");
		this.generateArtifact(module, null, "html/wordpress/entity/edit-entity-page-php.ftl" , entityOutputDir + "edit-entity-page.php");
		this.generateArtifact(module, null, "html/wordpress/entity/view-entity-page-php.ftl" , entityOutputDir + "view-entity-page.php");
		this.generateArtifact(module, null, "html/wordpress/entity/list-entity-page-php.ftl" , entityOutputDir + "list-entity-page.php");
		this.generateArtifact(module, null, "html/wordpress/page/portal-page.ftl", outputDir + "page/portal-page.php");
		this.generateArtifact(module, null, "html/wordpress/page/portal-error-page-php.ftl", outputDir + "page/portal-error-page.php");
	}

	private void doEntityJSFiles(Module module) {
		
		this.generateArtifact(module, null, 
			"js/wordpress/entity-datatables-js.ftl" , this.pluginDir + "js/entity-datatables.js");
		this.generateArtifact(module, null, 
			"js/wordpress/entity-multi-datatables-js.ftl" , this.pluginDir + "js/entity-multi-datatables.js");

		for(Entity entity : module.getEntities()){
			/*if(entity.getJsPageTemplate() != null){
				this.generateArtifact(module, entity, entity.getJsPageTemplate() , this.pluginDir + "js/" + entity.getName().toLowerCase() + "-form.js");
			} */
		}
		this.generateArtifact(module, null, 
			"js/wordpress/entity-form-js.ftl" , this.pluginDir + "js/entity-form.js");
		this.generateArtifact(module, null, 
			"js/wordpress/conversation-js.ftl" , this.pluginDir + "js/conversate.js");
	}


	private void doPages(Module module) {
		String outputDir = this.pluginDir + "templates/";
		String pageOutputDir = outputDir + "page/";
		String jsOutputDir = this.pluginDir + "js/";
		String includeApiOutputDir = this.pluginDir + "includes/api/";
		String includeViewOutputDir = this.pluginDir + "includes/view/";

		for(Page page: module.getPages()) {

			String pageName = page.getName();
			String jsTemplate = page.getJsTemplate();
			String apiTemplate = page.getApiTemplate();
			String pageTemplate = page.getPageTemplate();
			String viewTemplate = page.getViewTemplate();
			String viewFilterTemplate = page.getViewFilterTemplate();
			String artifactName = page.getName().toLowerCase();
			
			if(jsTemplate != null) this.generatePageArtifact(module, page, jsTemplate , jsOutputDir + artifactName + ".js");
			if(apiTemplate != null) this.generatePageArtifact(module, page, apiTemplate , includeApiOutputDir + pageName + "API.php");
			if(pageTemplate != null) this.generatePageArtifact(module, page, pageTemplate , pageOutputDir + artifactName + "-page.php");
			if(viewTemplate != null) this.generatePageArtifact(module, page, viewTemplate , includeViewOutputDir + pageName + "Page.php");
			if(viewFilterTemplate != null) this.generatePageArtifact(module, page, viewFilterTemplate , includeViewOutputDir + pageName + "ViewFilter.php");
		}
	}

	private void doUIComponents(Module module) {
		String pageOutputDir = this.pluginDir + "templates/uicomponent/";
		String includeViewOutputDir = this.pluginDir + "includes/uicomponent/";

		for(UIComponent uiComponent: module.getUiComponents()) {
			String name = uiComponent.getName();
			String className = uiComponent.getClassName();
			String htmlTemplate = uiComponent.getHtmlTemplate();
			String classTemplate = uiComponent.getClassTemplate();
			String uiComponentModel = uiComponent.getUiComponentModel();
			String htmlOutputDir = pageOutputDir + uiComponent.getUiGroup() + "/" ;

			this.createDirectoryIfNeeded(htmlOutputDir);

			this.generateUIComponentArtifact(module, uiComponent, htmlTemplate , htmlOutputDir + name + ".php");
			if(classTemplate != null) 
				this.generateUIComponentArtifact(module, uiComponent, classTemplate , includeViewOutputDir + className + ".php");
			if(uiComponentModel != null) 
				this.generateUIComponentArtifact(module, uiComponent, uiComponentModel , includeViewOutputDir + className + "Model.php");
		}
	}

	private void generateArtifact(Module module, Entity entity, String tmplFile,
			String outFile) {
		try {
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


	private void generateUIComponentArtifact(Module module, UIComponent uiComponent, String tmplFile,
			String outFile) {
		try {
			Template template = configuration.getTemplate(tmplFile);
			FileOutputStream fos = new FileOutputStream(outFile);
			Writer out = new OutputStreamWriter(fos);
			Map<String, Object> root = new HashMap<String, Object>();
			root.put("pluginName", this.pluginName);
			root.put("module", module);
			root.put("uiComponent", uiComponent);
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
