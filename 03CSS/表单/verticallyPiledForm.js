$(function(){
	var VerticallyPiledForm = function(params){
		this.$userName = $('#user_name');
		this.$password = $('#password');
		this.$description = $('#description');
		this.$specialDate = $('#special_date');
		this.$checkboxOne = $('#check_one');
		this.$checkboxTwo = $('#check_two');
		this.$checkboxThree = $('#check_three');
		this.$checkboxFour = $('#check_four');
		this.$radioOne = $('#radio_one');
		this.$radioTwo = $('#radio_two');
		this.$radioThree = $('#radio_three');
		this.$selectChoice = $('#select_choice');

		this.init(params);
	};

	VerticallyPiledForm.prototype = {
		//{userName,password,description,specialDate,checkOne,checkTwo,checkThree,checkFour,radioValue,selectOption}
		init: function(params){
			this.loadDefaultValues(params);
			this.addEvents();
		},
		loadDefaultValues: function(params){
			this.$userName.attr('value',params.userName);
			this.$password.attr('value',params.password);
			this.$description.text(params.description);
			this.$specialDate.attr('value',params.specialDate);
			this.$checkboxOne.attr('value',params.checkOne);
			this.$checkboxTwo.attr('checked',params.checkTwo);
			this.$checkboxThree.attr('checked',params.checkThree);
			this.$checkboxFour.attr('checked',params.checkFour);
			this.$radioOne.attr('checked',params.radioValue);
		},
		addEvents: function(){
			//事件
		},
		validate: function(){
			if(!Validation.isNumOrChar.validate(this.$userName.val())){
				alert(Validation.isNumOrChar.errMsg);
			};

		}

	};

	new VerticallyPiledForm({userName:'default',description:'Some description'});	//运行
});