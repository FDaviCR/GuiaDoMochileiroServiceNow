var task = new GlideRecord('sc_task');

task.initialize();

task.short_description = 'something';
task.description = 'something new';
task.state = 1;

task.insert();
