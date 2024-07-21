var task = new GlideRecord('sc_task');

if(task.get("sysIdRecord")){
	task.getValue("number");
}
