function myserverurl() {
	// var newURL = window.location.href;
	// window.location.protocol + "//" + window.location.host + "/" +
	// window.location.pathname;
	// alert(newURL);
	return "http://192.168.1.2:8081/mAgIDS/mobile/";
}

function pb_conv(txt, lng) {
	if(lng!='PB'){
		return txt;
	}
	else{
	var str1 = '';
	for ( var i = 0; i < txt.length; i++) {
	if (txt.charAt(i) == 'ਿ') {
			temp1 = str1.charAt(i-1);
			str2 = str1.substr(0, (str1.length)-1 ) + 'ਿ' + temp1;
			str1 = str2;
		} else 
		//	if (txt.charAt(i) == '੍' ) 
			{
	//			str2 = str1.substr(0, (str1.length))+'੍';
	//			str1 = str2;
	//			i=i+1;
	//		} else{
			temp1 = txt.charAt(i);
			str1 = str1 + txt.charAt(i);
			}
		}
	return str1;
	}
}
// ਬਕਿਸ ਬਕਿਿਸ ਸ



/*
function pb_conv(txt, lng) {
	alert(lng+txt);
	if(lng!='PB'){
		return txt;
	}
	else{
		var str1 = "";
		var str2="";
		var temp1="";
		for ( var i = 0; i < txt.length; i++) {
			if (txt.charAt(i) == 'ਿ') {
				temp1 = str1.charAt(i-1);
				str2 = str1.substr(0, (str1.length)-1 ) + 'ਿ' + temp1;
				str1 = str2;
			} else {
				if (txt.charAt(i) == '੍' ) {
					str2 = str1.substr(0, (str1.length))+'੍';
					str1 = str2;
					i=i+1;
				} else {
					
				temp1 = txt.charAt(i);
				str1 = str1 + txt.charAt(i);
				}
			}
		}
		var str1 = "";
		var str2 = "";
		var temp1 = "";
		return str1;		
	}
}
*/
function myLang(txt, laangu, eid) {
	var txtnew;
	switch (laangu) {
	case 'EN':
		txtnew = txt;
		break;
	case 'HN':
		switch (txt) {
		case "Select a State":
			txtnew = "किसी राज्य का चयन करें";
			break;
		case "Select a District/Janpad/Taluka":
			txtnew = "किसी भी जिला/जनपद/तालुका का चयन करें";
			break;
		case "Select an Admistrative Block":
			txtnew = "एक प्रशासनिक ब्लॉक का चयन";
			break;
		case "Agricultural Process Selection":
			txtnew = "कृषि संबंधी चयन प्रक्रिया";
			break;
		case "Select Affected Parts":
			txtnew = "प्रभावित भागों का चयन करें";
			break;
		case "Select a possible photo":
			txtnew = "किसी एक उपयुक्त तस्वीर का चयन करें ";
			break;
		}
		break;
	case 'PB':
		switch (txt) {
		case "Select a State":
			txtnew = "ਕਿਸੇ ਇੱਕ ਰਾਜ ਦੀ ਚੌਣ ਕਰੋ";
			break;
		case "Select a District/Janpad/Taluka":
			txtnew = "ਕਿਸੇ ਵੀ ਜਿਲ਼ਾ/ਜਨਪਦ/ਤਾਲੁਕਾ ਦੀ ਚੌਣ ਕਰੋ";
			break;
		case "Select an Admistrative Block":
			txtnew = "ਕਿਸੇ ਇੱਕ ਪ੍ਰਬੰਧਕੀ ਬਲਾਕ ਦੀ ਚੌਣ ਕਰੋ";
			break;
		case "Agricultural Process Selection":
			txtnew = "ਖੇਤੀਬਾੜੀ ਸਬੰਧੀ ਚੌਣ ਪਰਿਕ੍ਰੀਆ";
			break;
		case "Select Affected Parts":
			txtnew = "ਪ੍ਰਭਾਵਿਤ ਭਾਗਾਂ ਨੂੰ ਚੁਣੋ ";
			break;
		case "Select a possible photo":
			txtnew = "ਇੱਕ ਉਚਿਤ ਤਸਵੀਰ ਦੀ ਚੋਣ ਕਰੋ ਜੀ";
			break;
		}
		break;
	default:
		txtnew = txt;
		break;
	}
	// alert(txtnew);
	var txtnew1 ='';
	txtnew1=pb_conv(txtnew, laangu);
	document.getElementById(eid).innerHTML = "<div data-theme=f><h3><b>"
			+ txtnew1 + "</b></h3></div>";
	$(eid).trigger('create');
	txtnew1 = "";
}
