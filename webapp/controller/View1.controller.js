sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoVizFrameDemoVizFrame.controller.View1", {
      onInit: function(){
			var oVizFrame = this.getView().byId("idcolumn");
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Brands",
					value: "{Model>Brand}"
				}],

				measures: [{
					name: "Cars Bought",
					value: "{Model>Value}"
				}],

				data: {
					path: "Model>/Cars"
				}
			});
			oVizFrame.setDataset(oDataset);   
			oVizFrame.setVizType('bar');
			
//			set Viz Properties
			oVizFrame.setVizProperties({
				plotArea:{
					colorPalette : d3.scale.category20().range()
				},
				title:{
					visible:"true",
					text:"VizFrame Chart"
				}
			});
			
			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid':"valueAxis",
					'type':"Measure",
					'values':["Cars Bought"]
			}),
			
			feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid':"categoryAxis",
					'type':"Dimension",
					'values':["Brands"]
				
			});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
      }
	});
});