<tr id="${entity.name?lower_case}-list-item-template">
	<#list entity.fields as field>
		<#if field.dataColumn == "true">
		<td><span data-field="${field.name}"></span></td>
		</#if>
	</#list>
</tr>