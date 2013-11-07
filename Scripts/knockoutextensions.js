ko.bindingHandlers.translate = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || '';

        if(value != ''){
            if(static.isTranslateOn){
                $(element).text(translator.translate(value));
            }else{
                $(element).text(value);
            }
        }
    }
};

ko.bindingHandlers.slider = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {srcs:[]};
        if(value.srcs && value.srcs.length > 0){
            var str = "<ul class='slider'>";
            for(var i = 0, j = value.srcs.length; i < j; i++){
                str += "<li><img src='#{src}'/></li>".replace("#{src}", value.srcs[i].src || value.srcs[i]);
            }

            str += "</ul>";

            $(element).append(str).find('.slider').bxSlider(static.sliderOptions);
        }
    }
};

ko.bindingHandlers.display = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};

        if(static.isTranslateOn && !!value.on){
                if(value.supportLanguages.indexOf(translator.currentLanguage()) === -1){
                    $(element).addClass('hide');
                }else{
                    $(element).removeClass('hide');
                }
            };
    }
};

ko.bindingHandlers.dataAttr = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		
		for(var i in value){
			if(value.hasOwnProperty(i) && !! value[i]){
				$(element).data(i, value[i]);
			}
		}
    }
};


ko.bindingHandlers.Example = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
		var value = ko.utils.unwrapObservable(valueAccessor());

		$(element).attr('src', value);
    },
    update: function (element, valueAccessor) {
        var current = ko.utils.unwrapObservable(valueAccessor());
		var value = $(element).data('orgin');

        if (value !== current) {
		   $(element).css('outline', '1px solid red');
        }else{
			$(element).css('outline', '0');
		}
    }
};