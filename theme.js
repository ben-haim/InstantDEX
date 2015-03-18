var buttonTheme =  
{
	height:10,
	style:
	{
		color:"silver",
	},
	fill:"black",
    'stroke-width': 1,
    'stroke-opacity': 0.7,
    stroke: 'silver',
    r: 0,
    states: 
	{
        hover: 
		{
    		'stroke-width': 1,
    		stroke: 'silver',
            fill: '#424242'
        },
        select: 
		{
    		'stroke-width': 1,
    		stroke: 'silver',
            fill: '#424242'
        }
    }
}

Highcharts.theme = {
            
			global: 
			{
				useUTC: false
			},
			
            chart:
            {
                backgroundColor: '#000',
                borderColor: '#424242',
                borderWidth: 1,
				spacingLeft:0,
                //plotBorderWidth: 1,
            },
          
            credits:
            {
                enabled:false
            },

            navigator:
            {
				height:30,
				handles: 
				{
					backgroundColor: '#666',
					borderColor: '#AAA'
				},
            },
            
	
		    exporting: 
			{
				enabled:false,
			},

            yAxis: 
            {
                lineWidth: 0,
                gridLineWidth:0,
                tickWidth:0.4,
            }, 
            
            xAxis:
            {
                lineWidth:0,
                gridLineWidth:0,
                tickWidth:1,
            },
            
            plotOptions: 
            {
                candlestick:
                {
                    color: '#a80808',
                    lineColor:'#d00',
                    upLineColor: '#0c0', 
                    upColor: '#0c0',
					fillColor:"black",
                }, 
                column:
                {
                },
                series:
                {
                	//events:{mouseOut:destroyChartRenders, mouseOver:buildChartRenders},
					minPointLength:0.1,
                    pointPadding: 0.1,
                	states:
                	{
                		hover:
                		{
                			enabled:false
                		},
                		select:
                		{
                			enabled:false
                		}
               		},
					lineWidth: 1,
					animation:false,
                }
            },   
        }
