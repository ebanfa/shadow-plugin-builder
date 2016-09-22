<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ${entity.name} extends Model {

    public $primaryKey = 'id';
    public $table = '${entity.name?lower_case}';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

<#list entity.fields as field>
    <#if field.relationshipField == "Y" && field.dataType != entity.postName>
    /**
     * 
     */
    public function ${field.name}()
    {
        <#list module.entities as modEntity>
            <#if field.dataType == modEntity.postName>
        return $this->belongsTo('${modEntity.name}');
            </#if>
        </#list>
    }
    </#if>
</#list> 

<#list entity.relatedChildEntities?keys as child_field_name>
    /**
     * 
     */
    public function ${child_field_name}()
    {
        return $this->hasMany('${entity.relatedChildEntities[child_field_name].name}');
    }
</#list>   

}

?>