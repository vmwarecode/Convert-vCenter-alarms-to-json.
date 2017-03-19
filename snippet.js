/**
 * Get all active and not acknowledged alarms from all datacenters and convert the result to json for further processing. 
 * Jacob Styrup Bang - jacob@styrupnet.dk
 */
var alarmArray = new Array();
for each ( var myDatacenter in VcPlugin.allDatacenters ) {  
	var triggeredAlarms = myDatacenter.triggeredAlarmState
	for each (var triggeredAlarm in triggeredAlarms){
		if(!triggeredAlarm.acknowledged) {
			System.log(triggeredAlarm.time + " " + triggeredAlarm.entity + ": " + triggeredAlarm.alarm.info.name);
			var jsonAlarmObj = new  Object();
			jsonAlarmObj.name = triggeredAlarm.alarm.info.name;
			jsonAlarmObj.entity = triggeredAlarm.entity.name;
			jsonAlarmObj.time = triggeredAlarm.time;
			alarmArray.push(jsonAlarmObj);
		}
	}
}
System.log(JSON.stringify(alarmArray));
Alarms = JSON.stringify(alarmArray); 