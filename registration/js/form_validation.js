function validate(output){
	t0= check('name');
	t1= validate_length('username');
	t2= validate_length('password');
	t3= compare('password','repassword');
	t4= check_mail('email');
	t5= check_select('gender');
	t6= check_select('country');
	t7= check('address');
	t8= check_select('city');
	t9= check_select('state');
	t10= check_numeric('pincode');
	t11= check_numeric1('phone');
	t12= check_select('degree');
	t13= check('department');
	t14= check_select('year');
	t15= check_select('college');
	
	errorlist = '';
	if(!t0) {
		errorlist += 'Please enter your name<br/>';
		update_style('name',1);
	} else {
		update_style('name',2);
	}
	
	if (t1 < 3) {
		errorlist += 'Username is too SHORT<br />';
		update_style('username',1);
	} else {
		update_style('username',2);
	}
	
	if (t2 < 6) {
		errorlist += 'Password is too SHORT<br />';
		update_style('password',1);
	} else {
		update_style('password',2);
	}
	
	if (!t3) {
		errorlist += 'Passwords are not the same<br />';
		update_style('repassword',1);
	} else {
		update_style('repassword',2);
	}
	
	if (!t4) {
		errorlist += 'Invalid EMAIL address<br />';
		update_style('email',1);
	} else {
		update_style('email',2);
	}
	
	if(!t5){
		errorlist +='Please select gender<br/>';
		update_style('gender',1);
	} else {
		update_style('gender',2);
	}
	
	if(!t6){
		errorlist +='Please select country<br/>';
		update_style('country',1);
	} else {
		update_style('country',2);
	}
	
	if(!t7) {
		errorlist += 'Please enter your address<br/>';
		update_style('address',1);
	} else {
		update_style('address',2);
	}
	
	if(!t8){
		errorlist +='Please select city<br/>';
		update_style('city',1);
	} else {
		update_style('city',2);
	}
	
	if(!t9){
		errorlist +='Please select state<br/>';
		update_style('state',1);
	} else {
		update_style('state',2);
	}
	
	if(!t10){
		errorlist +='Please enter a valid PINCODE<br/>';
		update_style('pincode',1);
	} else {
		update_style('pincode',2);
	}
	
	if(!t11){
		errorlist +='Please enter a valid phone number<br/>';
		update_style('phone',1);
	} else {
		update_style('phone',2);
	}
	
	if(!t12){
		errorlist +='Please select degree<br/>';
		update_style('degree',1);
	} else {
		update_style('degree',2);
	}
	
	if(!t13) {
		errorlist += 'Please enter department<br/>';
		update_style('department',1);
	} else {
		update_style('department',2);
	}
	
	if(!t14){
		errorlist +='Please select year<br/>';
		update_style('year',1);
	} else {
		update_style('year',2);
	}
	
	if(!t15){
		errorlist +='Please select college<br/>';
		update_style('college',1);
	} else {
		update_style('college',2);
	}
	
	if (errorlist) {
		document.getElementById(output).innerHTML = errorlist;
		scroll(0,0);
		return false;
	}
	return true;
}

function validate_length(field){
	length= document.getElementById(field).value.length;
	return length;
}

function compare(field1,field2){
	str1= document.getElementById(field1).value;
	str2= document.getElementById(field2).value;
	if(str1 == str2)
		return 1;
	else
		return 0;
}

function check_mail(field){
	text1= document.getElementById(field).value;
	var reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
	return reEmail.test(text1);
}

function update_style(field, class_index) {
    if (class_index == 1) {
	document.getElementById(field).style.backgroundColor = "rgb(255, 183, 183)";
    } else if (class_index == 2) {
        document.getElementById(field).style.backgroundColor = "rgb(255, 255, 255)";
    }
    return 1;
}

function check_select(field){
	var temp= document.getElementById(field).value;
	if(temp == 0)
		return 0;
	return 1;
}

function check(field){
	var temp= document.getElementById(field).value.length;
	if(!temp)
		return 0;
	return 1;
}

function check_numeric(field){
	temp= document.getElementById(field).value;
	if(isNaN(temp)){
		return 0;
	}
	return 1;
}

function check_numeric1(field){
	temp= document.getElementById(field).value;
	length= document.getElementById(field).value.length;
	if(isNaN(temp) || length !=10){
		return 0;
	}
	return 1;
}

function checkAvailability() {
	$("#loaderIcon").show();
	jQuery.ajax({
	url: "check_availability.php",
	data:'username='+$("#username").val(),
	type: "POST",
	success:function(data){
		$("#user-availability-status").html(data);
		$("#loaderIcon").hide();
	},
	error:function (){}
	});
}