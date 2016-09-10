<#list module.entities?reverse as entity>
DROP TABLE IF EXISTS ${entity.name?lower_case};
</#list>

<#list module.entities as entity>

CREATE TABLE ${entity.name?lower_case}  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
 <#list entity.fields as field>
 	<#if field.relationshipField == "N">
	    <#if field.dataType == "name">
	${field.name}   		varchar(35) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "email">
	${field.name}   		varchar(35) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "text-lg">
	${field.name}   		varchar(255) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "text">
	${field.name}   		varchar(35) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "alphanumeric">
	${field.name}   		varchar(35) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "phone">
	${field.name}   		varchar(15) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "number">
	${field.name}   		INT(6) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "money">
	${field.name}   		decimal(38,0) NULL,
	    </#if>
	    <#if field.dataType == "flag">
	${field.name}   		char(1) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "option">
	${field.name}   		varchar(35) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "date">
	${field.name}   		date <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "datetime">
	${field.name}   		timestamp <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
	    <#if field.dataType == "hidden">
	${field.name}   		varchar(75) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
	    </#if>
    <#else>
   	${field.name}   int(11) <#if field.required == "Y">NOT NULL<#else>NULL</#if>,
    </#if>
</#list> 
<#list entity.fields as field>
 	<#if field.relationshipField == "Y">  
 		<#list module.entities as modEntity>
            <#if field.dataType == modEntity.postName>
 	FOREIGN KEY (${field.name}) REFERENCES ${modEntity.name?lower_case} (id), 
            </#if>
        </#list>
    </#if>
</#list> 
	PRIMARY KEY( id )
);
</#list>