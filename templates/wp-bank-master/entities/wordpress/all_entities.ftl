<#list module.entities?reverse as entity>
${entity.name}                  |                     ${entity.name?lower_case};
</#list>