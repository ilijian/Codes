var Validation = {
		isNumber: (function(){
			var reg = /^[0-9]*$/;
			return {
				errMsg: "只允许输入数字",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		is6digits: (function(){
			var reg = /^\d{6}$/;
			return {
				errMsg: "只允许输入6位数字",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isNumOrChar: (function(){
			var reg = /\w+/;
			return {
				errMsg: "只允许输入字母或数字",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isEnglish: (function(){
			var reg = /^[A-Za-z]*$/;
			return {
				errMsg: "只允许输入6位数字",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isChinese: (function(){
			var reg = /[\4e00-\9fa0]+/;
			return {
				errMsg: "只允许输入汉字",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isMobile: (function(){
			var reg = /^1[3|4|5|7|8]\d{9}$/;
			return {
				errMsg: "只允许输入手机号码",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isEmail: (function(){
			var reg = /^[\w.-]+@\w+(\.\w+)?\.\w{2,3}/gi;
			return {
				errMsg: "只允许输入电子邮件",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isPassword: (function(){
			var reg = /((?=.*[A-Za-z~!@#$%^&*()-+=|{}<>\?])(?=.*\d)|(?=.*\d)(?=.*A-Za-z~!@#$%^&*()-+=|{}<>\?))[\w\~!@#$%\^&\*\(\)-+=|<>\?]{6,16}/;
			return {
				errMsg: "密码格式不正确",
				validate: function(value){
					return reg.test(value);
				}
			}
		})(),
		isCustomedFormat:{
			errMsg: "",
			validate: function(reg,value){
				return reg.test(value);
			}
		}
	}