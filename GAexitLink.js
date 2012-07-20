/**
 * jQuery.GAexitLink.js
 *
 * Google Analytics に対して外部リンク離脱した時のカウントとそのURLをイベントトラッキングに自動保存する
 *
 * @author manji6 (@manji6)
 * @use    jQuery 1.4.2 higher
 * @examle  [simple use]
 *          GAexitLink.init();
 *          argument: Object{category: 'EventTracking CategoryName', target: 'target A tag scope(selector)'}
 *
 */
var GAexitLink = {
	setting: {
		category: 'exit Link',
		target: 'body'
	},
	init: function(option){
		if(typeof option === 'object'){
			var self = this;
			self.setting.category = option.category || self.setting.category;
		}
		this.trackExit();
	},
	trackExit: function(){
			var self = this;
			var domain = document.location.hostname;

		$(self.setting.target).delegate('a','click',function(){
			if(this.href.match(domain) === null){
				_gaq.push(['_trackEvent', self.setting.category, this.href]);
			}
		});
	}
}
